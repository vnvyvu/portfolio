import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Badges({
	badges,
	title,
	divider,
}: {
	badges: string[];
	title: string;
	divider?: boolean;
}) {
	return (
		<div
			className={twMerge(
				'flex flex-col gap-2 pb-3 border-gray-300',
				divider ? 'divider' : '',
			)}
		>
			<span className='text-base text-[#5a6182]'>{title}</span>
			<div className='flex flex-wrap gap-2'>
				{badges.map(badge => (
					<span
						className='border-b border-slate-400 px-2 font-semibold'
						key={badge}
					>
						{badge}
					</span>
				))}
			</div>
		</div>
	);
}
