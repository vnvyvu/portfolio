import React from 'react';
import { twMerge } from 'tailwind-merge';

export function LabelWithIcon({
	icon,
	label,
	className,
	htmlFor,
}: {
	icon: React.ReactNode;
	label: string | React.ReactNode;
	className?: string;
	htmlFor?: string;
}) {
	return (
		<label
			className={twMerge('inline-flex items-center gap-1', className)}
			htmlFor={htmlFor}
		>
			{icon}
			{typeof label === 'string' && label.startsWith('http') ? (
				<a href={label}>{label}</a>
			) : (
				<span className='pt-0.5'>{label}</span>
			)}
		</label>
	);
}
