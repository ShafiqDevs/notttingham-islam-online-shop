import { createClient } from '@supabase/supabase-js';
import { Product, Parcel } from './types';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl as string, supabaseKey as string);

const getProducts = async (): Promise<Product[]> => {
	try {
		const { data } = await supabase.from(`products`).select(`*`);

		if (data) {
			const products: Product[] = data;
			return products;
		} else return [] as Product[];
	} catch (error) {
		let message;
		if (error instanceof Error) message = error.message;
		else message = String(error);
		reportError(message);
		return [] as Product[];
	}
};

const getValue = async (ItemName: string): Promise<number | null> => {
	try {
		const { data } = await supabase
			.from(`products`)
			.select(`Value,DeliveryCost`)
			.eq(`ItemName`, ItemName);
		const value: number = data?.[0].Value + data?.[0].DeliveryCost;
		return value;
	} catch (error: any) {
		console.log(error.message);
		return null;
	}
};

const getParcelData = async (uid: number): Promise<any> => {
	const { data } = await supabase
		.from(`products`)
		.select(`Weight,Height,Length,Width,ItemName, Value`)
		.eq(`uid`, uid);

	console.log(`fromsupabase: ${uid}`);
	console.log(`from supabas:`, data);

	return data?.[0];
};

const insertParcel = async (parcels: Parcel[]) => {
	let { data, error } = await supabase.from(`parcels`).insert(parcels);
	let { data:history, error:error_history } = await supabase.from(`history`).insert(parcels);
	console.log(error);
};

export { getProducts, getValue, getParcelData, insertParcel };
