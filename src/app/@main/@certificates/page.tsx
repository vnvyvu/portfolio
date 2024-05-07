import { LabelWithIcon } from '@/app/_components/label-with-icon';
import { Section } from '@/app/_components/section';
import { MdCalendarMonth, MdLanguage, MdSchool } from 'react-icons/md';

export default function Certificates() {
	return (
		<Section title='Certificates'>
			<div className='flex flex-col gap-1 mt-1'>
				<LabelWithIcon
					icon={
						<MdLanguage
							size={20}
							color='#283665'
							className='min-w-6 self-start mt-2'
						/>
					}
					label={
						<>
							<span className='text-sm font-semibold'>
								IIG TOEIC 2 SKILLS
							</span>
							<br />
							<LabelWithIcon
								className='gap-0.5'
								icon={<MdCalendarMonth size={16} />}
								label='10/2023'
							/>
							<br />
							<span>Reached 600</span>
						</>
					}
				/>
				<LabelWithIcon
					icon={
						<MdSchool
							size={20}
							color='#283665'
							className='min-w-6 self-start mt-2'
						/>
					}
					label={
						<>
							<span className='text-sm font-semibold'>
								Bachelor of Information Security
							</span>
							<br />
							<LabelWithIcon
								className='gap-0.5'
								icon={<MdCalendarMonth size={16} />}
								label='03/2017 - 09/2022'
							/>
							<br />
							<span>
								Posts and Telecommunications Institute of
								Technology
							</span>
						</>
					}
				/>
			</div>
		</Section>
	);
}
