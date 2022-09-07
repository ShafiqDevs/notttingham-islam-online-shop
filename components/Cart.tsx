import { useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Customer } from '../utils/types';

type Props = {};

export default function Cart({}: Props) {
	const [isOpen, setisOpen] = useState<boolean>(false);
	const [onCheckout, setonCheckout] = useState<boolean>(false);
	const [customer, setCustomer] = useState<Customer>({
		Country: ``,
		County: ``,
		Email: ``,
		FirstName: ``,
		LastName: ``,
		Postcode: ``,
		Property: ``,
		Street: ``,
		Telephone: ``,
		Town: ``,
	});

	const CartItem = () => {
		return (
			<div className='flex items-center gap-8 bg-custome_blue md:w-max w-full p-4'>
				<img
					src={`/niic.png`}
					alt='img'
					className='w-[70px] h-full object-cover'
				/>
				<div className='flex flex-col items-center'>
					<h1 className='text-xl md:text-2xl font-semibold'>English Quran</h1>
					<h1 className='text-sm text-custome_gray'>Qnt: 3x</h1>
					<h1 className='text-sm text-custome_gray'>£75.20</h1>
				</div>
				<button className='bg-red-800 hover:bg-red-500 rounded-md p-2 text-sm'>
					Remove
				</button>
			</div>
		);
	};

	const toggleCheckout = () => {
		setonCheckout((prev) => !prev);
	};
	const toggleCart = () => {
		setisOpen((prev) => !prev);
	};

	const handleFormChange = (event: React.FormEvent<HTMLInputElement>) => {
		const { name, value } = event.currentTarget;

		setCustomer((prev) => {
			return { ...prev, [name]: value };
		});
	};

	return (
		<div className='relative'>
			<h1
				className='bg-green_primary rounded-full p-4 text-xl md:text-3xl text-white hover:bg-green_seconday hover:cursor-pointer'
				onClick={() => {
					toggleCart();
				}}>
				<BsCart />
			</h1>
			{isOpen && (
				<>
					{/* desktop view */}
					<div className=' hidden md:flex flex-col gap-2 absolute right-[100px] bottom-[50px] w-fit h-[600px] overflow-y-auto overflow-x-hidden overscroll-none  bg-white p-3 rounded-xl'>
						{onCheckout ? (
							<>
								<div className='flex gap-2 justify-center'>
									<input
										className='border opacity-70 p-3 rounded-md'
										type='text'
										placeholder='First name'
										name='FirstName'
										value={customer.FirstName}
										onChange={(e) => {
											handleFormChange(e);
										}}
									/>
									<input
										className='border opacity-70 p-3 rounded-md'
										type='text'
										name='LastName'
										value={customer.LastName}
										onChange={(e) => {
											handleFormChange(e);
										}}
										placeholder='Last name'
									/>
								</div>
								<input
									className='border opacity-70 p-3 rounded-md'
									type='text'
									name='Property'
									value={customer.Property}
									onChange={(e) => {
										handleFormChange(e);
									}}
									placeholder='Address line'
								/>
								<div className='flex gap-2 justify-center'>
									<input
										className='border opacity-70 p-3 rounded-md'
										type='text'
										name='Street'
										value={customer.Street}
										onChange={(e) => {
											handleFormChange(e);
										}}
										placeholder='Street'
									/>
									<input
										className='border opacity-70 p-3 rounded-md'
										type='text'
										name='Town'
										value={customer.Town}
										onChange={(e) => {
											handleFormChange(e);
										}}
										placeholder='Town'
									/>
								</div>
								<input
									className='border opacity-70 p-3 rounded-md'
									type='text'
									name='County'
									value={customer.County}
									onChange={(e) => {
										handleFormChange(e);
									}}
									placeholder='County'
								/>
								<input
									className='border opacity-70 p-3 rounded-md'
									type='text'
									name='Country'
									value={customer.Country}
									onChange={(e) => {
										handleFormChange(e);
									}}
									placeholder='Country'
								/>
								<div className='flex gap-2 justify-center'>
									<input
										className='border opacity-70 p-3 rounded-md'
										type='text'
										name='Postcode'
										value={customer.Postcode}
										onChange={(e) => {
											handleFormChange(e);
										}}
										placeholder='Post code'
									/>
									<input
										className='border opacity-70 p-3 rounded-md'
										type='text'
										name='Telephone'
										value={customer.Telephone}
										onChange={(e) => {
											handleFormChange(e);
										}}
										placeholder='Telephone'
									/>
								</div>
								<input
									className='border opacity-70 p-3 rounded-md'
									type='text'
									name='Email'
									value={customer.Email}
									onChange={(e) => {
										handleFormChange(e);
									}}
									placeholder='Email address'
								/>
								<div className=' flex flex-col w-full h-fit mt-auto gap-2'>
									<button className='w-full text-xl md:text-2xl rounded-md p-2 text-green_seconday border-2 font-semibold'>
										Pay
									</button>
									<button
										className='w-full text-xl md:text-2xl bg-red-600 hover:bg-red-500 rounded-md p-2 text-white font-semibold'
										onClick={() => toggleCheckout()}>
										Cancel
									</button>
								</div>
							</>
						) : (
							<>
								<CartItem />
								<CartItem />
								<CartItem />
								<CartItem />
								<CartItem />
								<div className=' flex flex-col w-full h-fit mt-auto gap-2'>
									<button className='w-full text-xl md:text-2xl bg-red-600 hover:bg-red-500 rounded-md p-2 text-white'>
										CLEAR
									</button>
									<button
										className='w-full text-xl md:text-2xl rounded-md p-2 text-green_seconday border-2'
										onClick={() => toggleCheckout()}>
										CHECKOUT
									</button>
								</div>
							</>
						)}
					</div>
					{/* mobile view */}
					<div className='md:hidden fixed flex flex-col gap-10  left-0 top-0 w-screen h-screen overflow-auto overscroll-none '>
						<div className='bg-black/80 w-full h-full fixed z-[-1]' />
						<h1
							className='self-end text-3xl p-2 text-white'
							onClick={() => {
								toggleCart();
							}}>
							<AiFillCloseCircle />
						</h1>
						{onCheckout ? (
							<div className='flex flex-col gap-2 p-2'>
								<div className='flex gap-2 justify-center '>
									<input
										className='border opacity-70 p-3 rounded-md w-full'
										type='text'
										name='FirstName'
										value={customer.FirstName}
										onChange={(e) => {
											handleFormChange(e);
										}}
										placeholder='First name'
									/>
									<input
										className='border opacity-70 p-3 rounded-md w-full'
										type='text'
										name='LastName'
										value={customer.LastName}
										onChange={(e) => {
											handleFormChange(e);
										}}
										placeholder='Last name'
									/>
								</div>
								<input
									className='border opacity-70 p-3 rounded-md'
									type='text'
									name='Property'
									value={customer.Property}
									onChange={(e) => {
										handleFormChange(e);
									}}
									placeholder='Address line'
								/>
								<div className='flex gap-2 justify-center'>
									<input
										className='border opacity-70 p-3 rounded-md w-full'
										type='text'
										name='Street'
										value={customer.Street}
										onChange={(e) => {
											handleFormChange(e);
										}}
										placeholder='Street'
									/>
									<input
										className='border opacity-70 p-3 rounded-md w-full'
										type='text'
										name='Town'
										value={customer.Town}
										onChange={(e) => {
											handleFormChange(e);
										}}
										placeholder='Town'
									/>
								</div>
								<input
									className='border opacity-70 p-3 rounded-md'
									type='text'
									name='County'
									value={customer.County}
									onChange={(e) => {
										handleFormChange(e);
									}}
									placeholder='County'
								/>
								<input
									className='border opacity-70 p-3 rounded-md'
									type='text'
									name='Country'
									value={customer.Country}
									onChange={(e) => {
										handleFormChange(e);
									}}
									placeholder='Country'
								/>
								<div className='flex gap-2 justify-center'>
									<input
										className='border opacity-70 p-3 rounded-md w-full'
										type='text'
										name='Postcode'
										value={customer.Postcode}
										onChange={(e) => {
											handleFormChange(e);
										}}
										placeholder='Post code'
									/>
									<input
										className='border opacity-70 p-3 rounded-md w-full'
										type='text'
										name='Telephone'
										value={customer.Telephone}
										onChange={(e) => {
											handleFormChange(e);
										}}
										placeholder='Telephone'
									/>
								</div>
								<input
									className='border opacity-70 p-3 rounded-md'
									type='text'
									name='Email'
									value={customer.Email}
									onChange={(e) => {
										handleFormChange(e);
									}}
									placeholder='Email address'
								/>
								<div className=' flex flex-col w-full h-fit mt-auto gap-2'>
									<button className='w-full text-xl md:text-2xl rounded-md p-2 text-green_seconday border-2 font-semibold'>
										Pay
									</button>
									<button
										className='w-full text-xl md:text-2xl bg-red-600 hover:bg-red-500 rounded-md p-2 text-white font-semibold'
										onClick={() => toggleCheckout()}>
										Cancel
									</button>
								</div>
							</div>
						) : (
							<div className='p-2 w-full h-full '>
								<div className='flex flex-col gap-2'>
									<CartItem />
									<CartItem />
									<CartItem />

									<div className='pb-9 flex flex-col gap-3'>
										<button className='w-full text-xl md:text-2xl bg-red-600 hover:bg-red-500 rounded-md p-3 text-white'>
											CLEAR
										</button>
										<button
											className='w-full text-xl md:text-2xl rounded-md p-3 text-green_seconday border-2'
											onClick={() => toggleCheckout()}>
											CHECKOUT
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
}
