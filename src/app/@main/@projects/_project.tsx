import { LabelWithIcon } from '@/app/_components/label-with-icon';
import { MdCalendarMonth, MdWork } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

interface ProjectProps extends React.PropsWithChildren {
	projectName: string;
	date: string;
	company: string;
	role: string;
	technologies: string;
	achievements: string[];
	divider?: boolean;
}

export function Project({
	projectName,
	company,
	date,
	role,
	technologies,
	achievements,
	divider = true,
}: ProjectProps) {
	return (
		<div
			className={twMerge('flex flex-col gap-2', divider ? 'divider' : '')}
		>
			<h2 className='text-lg text-[#493f3f]'>{projectName}</h2>
			<div className='flex gap-16 mb-2 -mt-1 text-[#61636b]'>
				<LabelWithIcon
					icon={<MdCalendarMonth size={16} />}
					label={date}
				/>
				<LabelWithIcon icon={<MdWork size={16} />} label={company} />
			</div>
			<div>
				<span className='font-semibold'>Role: </span>
				<span>{role}</span>
			</div>
			<div>
				<span className='font-semibold'>Technologies: </span>
				<span>{technologies}</span>
			</div>
			<div className='pb-3'>
				<span className='font-semibold'>Achievements: </span>
				<ul className='list-disc ml-4'>
					{achievements.map((text, i) => (
						<li key={i}>{text}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
