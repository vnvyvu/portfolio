interface SectionProps extends React.PropsWithChildren {
	title: string;
}
export function Section({ title, children }: SectionProps) {
	return (
		<div className='text-base flex flex-col gap-2'>
			<span className='relative uppercase font-semibold text-4xl text-[#645b5b] before:absolute before:border-b-4 before:border-[#645b5b] before:w-full before:bottom-0'>
				{title}
			</span>
			{children}
		</div>
	);
}
