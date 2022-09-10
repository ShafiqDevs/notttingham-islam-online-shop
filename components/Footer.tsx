import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { useRouter } from 'next/router';

type Props = {};

export default function Footer({}: Props) {
	const router = useRouter();
	return (
		<div className='flex flex-col md:flex-row justify-center items-center gap-14 p-8'>
			<div className='h-fit md:h-fit bg-white flex flex-col justify-center items-center gap-4'>
				<div className='flex flex-col md:flex-row gap-5 md:gap-3 items-center'>
					<img
						src='/niic.png'
						alt='logo'
						width={90}
						height={90}
						className=''
					/>
					<h1 className='text-xl text-center'>
						Visit our centre in{' '}
						<span
							className='text-custome_orange font-semibold hover:underline hover:cursor-pointer'
							onClick={() => router.push(`https://www.nottinghamislam.com/`)}>
							Nottingham
						</span>
					</h1>
				</div>
				<div className='flex gap-3 justify-center items-center '>
					<span
						className='hover:cursor-pointer'
						onClick={() =>
							router.push(`https://www.instagram.com/nottinghamislam/?hl=en`)
						}>
						<img
							src='/Instagram.png'
							alt='Instagram'
							width={30}
							height={30}
						/>
					</span>
					<span
						className='text-3xl text-blue-600 hover:cursor-pointer'
						onClick={() =>
							router.push(
								`https://www.facebook.com/nottinghamislaminformationpoint/`
							)
						}>
						<AiFillFacebook />
					</span>
					<span
						className='text-3xl text-red-600 hover:cursor-pointer'
						onClick={() =>
							router.push(`https://www.youtube.com/nottinghamislam`)
						}>
						<AiFillYoutube />
					</span>
				</div>
			</div>

			<div className='shadow-lg'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.320006433068!2d-1.1728208840462258!3d52.96065751123065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c18c6be8b6c9%3A0xf52a0cdf1bdc3e0b!2sNottingham%20Islam%20Information%20Centre!5e0!3m2!1sen!2suk!4v1662815965447!5m2!1sen!2suk'
					width='400'
					height='300'
					style={{ border: 0 }}
					allowFullScreen={true}
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>
			</div>
		</div>
	);
}
