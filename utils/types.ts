type Parcel = {
	'Item Name': string;
	Value: number;
	Quantity: number;
	Weight: number;
	Height: number;
	Length: number;
	Width: number;
	Name: string;
	Property: string;
	Street: string;
	Town: string;
	County: string;
	Postcode: string;
	Country: string;
	Telephone: string;
	Email: string;
};

type History = {
	'Item Name': string;
	created_at: string;
	Value: number;
	Quantity: number;
	Weight: number;
	Height: number;
	Length: number;
	Width: number;
	Name: string;
	Property: string;
	Street: string;
	Town: string;
	County: string;
	Postcode: string;
	Country: string;
	Telephone: string;
	Email: string;
	uid: string;
};

type Customer = {
	FirstName: string;
	LastName: string;
	Property: string;
	Street: string;
	Town: string;
	County: string;
	Postcode: string;
	Country: string;
	Telephone: string;
	Email: string;
};

type Product = {
	uid: number;
	ItemName: string;
	Quantity: number;
	Value: number;
	DeliveryCost: number;
	Image?: string;
	QuranCount?: number;
};

type CartItem = {
	uid: number;
	ItemName: string;
	Quantity: number;
	Value: number;
	Image?: string;
};

type CheckoutMetadata = {
	orderInfo: [
		{
			uid?: number;
			Quantity?: number;
		}
	];
	customer: Customer;
};

export type { Parcel, CartItem, Customer, Product, CheckoutMetadata, History };
