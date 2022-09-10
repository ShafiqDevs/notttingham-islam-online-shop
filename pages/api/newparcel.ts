// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'micro';
import Stripe from 'stripe';
import { Parcel, CheckoutMetadata, History } from '../../utils/types';
import { getParcelData, insertParcel } from '../../utils/supabase';
type Data = {
	message: string;
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: '2022-08-01',
});

// const novu = new Novu(process.env.MAILJET_KEY as string);

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === `POST`) {
		console.log(`line 29`);
		const buf = await buffer(req);
		const sig = req.headers[`stripe-signature`];
		const webhookSecret = process.env.STRIPE_WEBHOOK_SIG_KEY;

		let event;
		console.log(`line 35`);
		try {
			console.log(`line 37`);
			if (!sig || !webhookSecret) {
				console.log(`if went false`);
				return;
			}
			console.log(`line 40`);
			event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);

			if (event.type === `checkout.session.completed`) {
				console.log(`${event.type} is my event bro`);

				console.log(`line 44`);
				const checkoutObject: Stripe.Checkout.Session = event.data
					.object as Stripe.Checkout.Session;
				console.log(JSON.parse(JSON.stringify(checkoutObject.metadata)));
				let metadata: CheckoutMetadata = {
					orderInfo: JSON.parse(checkoutObject.metadata?.orderInfo as any),
					customer: JSON.parse(checkoutObject.metadata?.customer as any),
				};
				console.log(`metadata in hook ${metadata}`);
				console.log(`line 47`);
				const parcels: Parcel[] = await createParcel(metadata);
				console.log(`line 49`);
				console.log(parcels);
				const history: History = await insertParcel(parcels);
				console.log(`line 54`);
				// send email notification
				sendConfirmationEmail(metadata, history.uid);
			} else {
				console.log(`${event.type} is not my event bro`);
				// res.status(400).json({ message: `webhook errror` });
			}
		} catch (error: any) {
			console.log(`i dont know what happened man ${error.message}`);
			return res
				.status(400)
				.send({ message: `webhook errror ${error.message}` });
		}
	}
	console.log(`are we done?`);
	res.json({ message: `event handled` });
}

async function createParcel(object: CheckoutMetadata): Promise<Parcel[]> {
	const parcels: Parcel[] = [];
	console.log(`is arry or not?:`, object.orderInfo.length);
	for (const item of object.orderInfo) {
		console.log(`what is my uid? ${item.uid}`);
		const parcelData = await getParcelData(item.uid as number);
		const parcel: Parcel = {
			'Item Name': parcelData.ItemName,
			Height: parcelData.Height,
			Length: parcelData.Length,
			Weight: parcelData.Weight,
			Width: parcelData.Width,
			Country: object.customer.Country,
			County: object.customer.County,
			Email: object.customer.Email,
			Name: `${object.customer.FirstName} ${object.customer.LastName}`,
			Postcode: object.customer.Postcode,
			Property: object.customer.Property,
			Quantity: item.Quantity as number,
			Street: object.customer.Street,
			Telephone: object.customer.Telephone,
			Town: object.customer.Town,
			Value: parcelData.Value,
		};
		parcels.push(parcel);
	}

	console.log(`line 90  ${parcels}`);

	return parcels;
}

async function sendConfirmationEmail(metadata: CheckoutMetadata, uid: string) {
	const sgMail = require('@sendgrid/mail');
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: metadata.customer.Email, // Change to your recipient
		from: 'shafiq.belaroussi@outlook.com', // Change to your verified sender
		subject: 'NIIC - Order Confirmation',
		html: `<strong>Your Order number #${uid}</strong>`,
	};
	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error: any) => {
			console.error(error);
		});
}
