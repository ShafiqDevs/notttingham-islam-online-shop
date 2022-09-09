import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

type Props = {};

const Success: NextPage<Props> = ({}: Props) => {

	const router = useRouter();

	return (
		<div className='flex flex-col md:gap-3 gap-10 text-white p-8 justify-center items-center my-auto text-center bg-green_primary w-full h-full mt-5 md:h-80 md:w-fit md:p-8 mx-auto rounded-lg '>
			<h1 className='text-xl md:text-3xl font-semibold'>
				Transaction Completed Successfully
			</h1>
			<h1 className='md:text-xl text-sm underline'>Redirecting to Home Page</h1>
			<button
				className='bg-white rounded-lg py-3 px-10 my-7 text-green_primary font-semibold mt-auto hover:bg-custome_blue hover:text-white'
				onClick={() => router.push(`/`)}>
				Go To Home Page
			</button>
		</div>
	);
};

export default Success;
