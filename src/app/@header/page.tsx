import Image from 'next/image';
import {
	SiMaildotru,
	SiLinkedin,
	SiGithub,
	SiGooglemaps,
} from 'react-icons/si';
import avatar from '../../../public/at46.jpg';
import { LabelWithIcon } from '../_components/label-with-icon';

export default async function Header() {
	return (
		<header className='bg-sky-900 px-8 py-4 gap-8 flex text-base'>
			<div className='flex flex-wrap text-sm'>
				<h1 className='font-semibold text-3xl basis-full'>VU CHI VY</h1>
				<h2 className='font-semibold text-base basis-full'>
					Web Developer
				</h2>
				<LabelWithIcon
					icon={<SiMaildotru size={24} className='min-w-7' />}
					label='vutrivi99@gmail.com'
					className='basis-1/2'
				/>
				<LabelWithIcon
					icon={<SiLinkedin size={24} className='min-w-7' />}
					label='https://www.linkedin.com/in/vy-vu-761bab274/'
					className='basis-1/2'
				/>
				<LabelWithIcon
					icon={<SiGithub size={24} className='min-w-7' />}
					label='https://github.com/vnvyvu'
					className='basis-1/2'
				/>
				<LabelWithIcon
					icon={<SiGooglemaps size={24} className='min-w-7' />}
					label='Thanh Xuan district'
					className='basis-1/2'
				/>
			</div>
			<div className='min-w-36 max-w-36 min-h-36 max-h-36 overflow-clip rounded-md mt-5 ml-auto'>
				<Image src={avatar} className='-mt-5' alt='avatar' />
			</div>
		</header>
	);
}
