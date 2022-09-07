import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

type Props = {};

export default function Product({}: Props) {
	return (
		<div className='flex flex-col w-full h-fit text-center bg-custome_blue rounded-lg overflow-hidden text-white relative'>
			<img
				src='/bg-large.jpg'
				alt=''
			/>
			<div className='flex flex-col gap-4 p-2'>
				<h1 className='text-2xl font-semibold'>English Quran</h1>
				<h1 className='text-sm text-custome_gray'>A box containing 32 Qurans</h1>
				<div className='flex justify-end gap-4 rounded-md'>
					<input
						type='number'
						max={10}
						min={1}
					/>
					<button className='text-2xl border-2 border-white px-5 text-white rounded-md hover:bg-green_primary'>
						<AiOutlinePlus />
					</button>
				</div>
			</div>
            <h1 className='absolute left-0 top-0 rounded-tl-lg rounded-br-lg p-2 shadow-md shadow-black bg-custome_blue' >£78.20</h1>
		</div>
	);
}
