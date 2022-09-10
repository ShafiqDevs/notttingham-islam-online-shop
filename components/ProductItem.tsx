import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Product } from '../utils/types';

type Props = {
	product: Product;
	onAdd: (product: Product) => void;
};

export default function ProductItem(props: Props) {
	const [product, setProduct] = useState<Product>({
		uid: props.product.uid,
		ItemName: props.product.ItemName,
		DeliveryCost: props.product.DeliveryCost,
		Value: props.product.Value,
		Quantity: 0,
		Image: props.product.Image,
	});

	const handleProductQuantity = (e: React.FormEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;
		const Quantity = parseInt(value);
		setProduct((prev: any) => {
			return { ...prev, Quantity };
		});
	};

	return (
		<div className='flex flex-col mx-auto w-[90%] md:w-full h-full text-center bg-custome_blue rounded-lg overflow-hidden text-white shadow-md shadow-black/40 relative'>
			<img
				src={props.product.Image || `/bg-large.jpg`}
				alt=''
				width={100}
				height={100}
				className='  w-full max-h-72 object-cover'
			/>
			<div className='flex flex-col gap-4 p-2'>
				<h1 className='text-2xl font-semibold'>{product.ItemName}</h1>
				<h1 className='text-sm text-custome_gray'>
					{`A box containing ${props.product.QuranCount || 'xyz'} Qurans`}
				</h1>
				<div className='flex justify-end gap-4 rounded-md text-black'>
					<input
						className=' text-center'
						type='number'
						max={10}
						min={1}
						onChange={(e) => {
							handleProductQuantity(e);
						}}
					/>
					<button
						className='text-2xl border-2 border-white px-5 text-white rounded-md hover:bg-green_primary'
						onClick={() => {
							product.Quantity > 0 && props.onAdd(product);
						}}>
						<AiOutlinePlus />
					</button>
				</div>
			</div>
			<h1 className='absolute left-0 top-0 rounded-tl-lg rounded-br-lg p-2 shadow-md shadow-black bg-custome_blue'>
				{`£${product.Value + product.DeliveryCost}`}
			</h1>
		</div>
	);
}
