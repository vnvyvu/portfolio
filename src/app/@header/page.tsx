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
		<header className='bg-sky-900 px-8 py-4 gap-4 flex flex-col text-base'>
			<div className='sm:relative flex flex-wrap text-sm'>
				<h1 className='font-semibold text-3xl basis-full max-sm:text-center'>
					VU CHI VY
				</h1>
				<h2 className='font-semibold text-base basis-full max-sm:text-center'>
					Web Developer
				</h2>
				<div className='max-sm:mx-auto max-sm:mt-2 sm:absolute sm:right-0 min-w-32 max-w-32 min-h-32 max-h-28 max-md:mt-10 overflow-clip rounded-md ml-auto max-lg:mt-4'>
					<Image src={avatar} className='-mt-5' alt='avatar' />
				</div>
			</div>
			<div className='flex flex-wrap gap-y-2 max-w-[75%] max-sm:max-w-[100%] max-sm:flex-nowrap max-sm:flex-col max-sm:items-center max-sm:gap-y-0.5'>
				<LabelWithIcon
					icon={<SiMaildotru size={24} className='min-w-7' />}
					label='vutrivi99@gmail.com'
					className='basis-1/2 max-lg:mb-2'
				/>
				<LabelWithIcon
					icon={<SiLinkedin size={24} className='min-w-7' />}
					label='https://www.linkedin.com/in/vyvu99/'
					className='basis-1/2 max-lg:mb-2'
				/>
				<LabelWithIcon
					icon={<SiGithub size={24} className='min-w-7' />}
					label='https://github.com/vnvyvu'
					className='basis-1/2 max-lg:mb-2'
				/>
				<LabelWithIcon
					icon={<SiGooglemaps size={24} className='min-w-7' />}
					label='Thanh Xuan district'
					className='basis-1/2 max-lg:mb-2'
				/>
			</div>
		</header>
	);
}
