type Parcel = {
	'Item Name': string;
	Value: string;
	Quantity: Number;
	Weight: Number;
	Height: Number;
	Length: Number;
	Width: Number;
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
	'Item Name': string;
	Quantity: Number;
	Value: string;
	Image: string;
	QuranCount: number;
};

type CartItem = {
	'Item Name': string;
	Quantity: Number;
	Value: string;
	Image: string;
};

export type { Parcel, CartItem, Customer, Product };
