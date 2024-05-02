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
		<header className='bg-sky-900 p-8 gap-8 flex'>
			<div className='flex flex-wrap'>
				<h1 className='font-semibold text-4xl basis-full'>VU CHI VY</h1>
				<h2 className='font-semibold text-lg basis-full'>
					Web Developer
				</h2>
				<LabelWithIcon
					icon={<SiMaildotru size={16} />}
					label='vutrivi99@gmail.com'
					className='text-sm basis-1/2'
				/>
				<LabelWithIcon
					icon={<SiLinkedin size={16} />}
					label='https://www.linkedin.com/in/vy-vu-761bab274/'
					className='text-sm basis-1/2'
				/>
				<LabelWithIcon
					icon={<SiGithub size={16} />}
					label='https://github.com/vnvyvu'
					className='text-sm basis-1/2'
				/>
				<LabelWithIcon
					icon={<SiGooglemaps size={16} />}
					label='Thanh Xuan district'
					className='text-sm basis-1/2'
				/>
			</div>
<<<<<<< HEAD
			<div className='min-w-32 max-w-32 min-h-32 max-h-32 overflow-clip rounded-md mt-5 ml-auto'>
				<Image src={avatar} className='-mt-5' alt='avatar' />
			</div>
		</header>
=======
			<div className='min-w-32 max-w-32 min-h-32 max-h-32 overflow-clip rounded-md mt-5'>
				<Image src={avatar} className='-mt-5' alt='avatar' />
			</div>
		</footer>
>>>>>>> ff4ec3c (init)
	);
}
