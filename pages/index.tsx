import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Cart from '../components/Cart';
import Product from '../components/Product';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	const Hero = () => {
		return (
			<div className='relative w-full h-[300px] md:h-[600px]'>
				<div className='flex flex-col gap-4 text-white justify-center items-center primary_gradient absolute left-0 right-0 w-full h-full z-[2]'>
					<h1 className=' text-2xl md:text-4xl'>Nottingham Islam Shop</h1>
					<h1 className=' text-sm md:text-xl'>
						Multiple Quran translations available
					</h1>
				</div>
				<img
					src={`/bg-large.jpg`}
					className={`object-cover w-full h-full`}
				/>
			</div>
		);
	};

	return (
		<div className='primary_gradient w-full h-fit p- relative'>
			<Hero />
			<div className=' fixed right-[5vw] bottom-[10vh] z-10'>
				<Cart />
			</div>
      <h1></h1>
			<div className='grid md:grid-cols-4 gap-2 w-full h-full mt-11 p-7'>
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
};

export default Home;

// <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>