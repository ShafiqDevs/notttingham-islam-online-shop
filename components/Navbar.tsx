import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {};

export default function Navbar({}: Props) {
	const router = useRouter();

	return (
		<div>
			{/* desktop view */}
			<div className='hidden lg:flex justify-start items-center px-12 py-4'>
				<Image
					src={`/niic.png`}
					width={100}
					height={100}
					objectFit={'fill'}
					alt={`brand logo`}
				/>
				<h1
					className='text-2xl ml-auto hover:cursor-pointer hover:text-custome_orange'
					onClick={() => {
						router.replace(`/`);
					}}>
					Home
				</h1>
			</div>

			{/* mobile view */}
			<div className='lg:hidden flex justify-center items-center bg-black w-full h-32 px-4'>
				<Image
					src={`/banner.png`}
					width={500}
					height={100}
					objectFit={'fill'}
					alt={`banner`}
				/>
			</div>
		</div>
	);
}
