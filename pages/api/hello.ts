// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getProducts } from '../../utils/supabase';

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const sgMail = require('@sendgrid/mail');
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: 'shafiq.belaroussi@gmail.com', // Change to your recipient
		from: 'shafiq.belaroussi@outlook.com', // Change to your verified sender
		subject: 'Sending with SendGrid is Fun',
		html: `<strong>Your Order number #</strong>`,
	};
	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error: any) => {
			console.error(error);
		});

	res.status(200).json({ name: 'John Doe' });
}
