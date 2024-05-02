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
							size={21}
							color='#283665'
							className='mr-1 self-start'
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
								icon={<MdCalendarMonth size={13} />}
								label='10/2023'
							/>
							<br />
							<span>600</span>
						</>
					}
				/>
				<LabelWithIcon
					icon={
						<MdSchool
							size={24}
							color='#283665'
							className='mr-1 self-start'
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
								icon={<MdCalendarMonth size={13} />}
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
