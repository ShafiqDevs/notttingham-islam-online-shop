// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getProducts } from '../../utils/supabase';
import {
	CartItem,
	Customer,
	Parcel,
	CheckoutMetadata,
} from '../../utils/types';
import { getValue, getParcelData } from '../../utils/supabase';
import Stripe from 'stripe';

type Data = {
	message: string;
	checkout_url?: string;
};

const stripe = new Stripe(process.env.STRIPE_KEY as string, {
	apiVersion: `2022-08-01`,
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method != `POST`)
		res.status(404).json({ message: 'Method not allowed' });

	try {
		const {
			customer,
			cartItems,
		}: { customer: Customer; cartItems: CartItem[] } = req.body;

		let line_items: any[] = [];
		for (const cartItem of cartItems) {
			const value = await getValue(cartItem.ItemName);
			let unit_amount;
			if (value) unit_amount = value * 100;
			let name = cartItem.ItemName;
			let images = [cartItem.Image];

			line_items.push({
				price_data: {
					currency: `gbp`,
					product_data: {
						name,
						// images,
					},

					unit_amount: (cartItem.Value / cartItem.Quantity) * 100,
				},
				quantity: cartItem.Quantity,
			});
		}
		const metadata = createMetadata(customer, cartItems);
		console.log(`metadata has: `, JSON.stringify(metadata).length);

		const vercelUrl = process.env.VERCEL_URL as string;
		const myUrl = vercelUrl || (process.env.PUBLIC_NEXT_URL as string);

		console.log({ vercelUrl, myUrl });

		const session = await stripe.checkout.sessions.create({
			cancel_url: `${myUrl}/`,
			success_url: `${myUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
			mode: `payment`,
			line_items: line_items,
			customer_email: customer.Email,
			metadata: {
				orderInfo: JSON.stringify(metadata.orderInfo),
				customer: JSON.stringify(metadata.customer),
			},
		});

		res.status(200).json({
			message: `checkout created successfully`,
			checkout_url: session.url as string,
		});
	} catch (error: any) {
		res.status(400).json({
			message: `error creating checkout ${error.message} ${JSON.stringify({
				vercelUrl: process.env.VERCEL_URL as string,
				myUrl: process.env.PUBLIC_NEXT_URL as string,
			})}`,
		});
	}
}

async function createLineItems(cartItems: CartItem[]) {
	let line_items: any[] = [];

	return line_items;
}
function createMetadata(
	customer: Customer,
	cartItems: CartItem[]
): CheckoutMetadata {
	console.log(`uid before creating metadata: ${JSON.stringify(cartItems)}`);
	let metadata: CheckoutMetadata = {
		customer: customer,
		orderInfo: [{}],
	};
	let orderInfo = [];

	for (const item of cartItems) {
		orderInfo.push({ uid: item.uid, Quantity: item.Quantity });
	}
	metadata.orderInfo = orderInfo as any;
	console.log(`uid after creating metadata: ${JSON.stringify(metadata)}`);
	return metadata;
}
