'use client';
import { useMediaQuery } from '@/lib/useMediaQuery';

export default function MainLayout({
	summary,
	projects,
	skills,
	certificates,
}: {
	summary: React.ReactNode;
	projects: React.ReactNode;
	skills: React.ReactNode;
	certificates: React.ReactNode;
}) {
	const isMobile = useMediaQuery();
	return (
		<main className='flex max-md:flex-col px-8 py-4 bg-white text-black gap-4 shadow-md'>
			<div className='flex flex-col basis-3/4 gap-4'>
				{summary}
				{isMobile ? skills : projects}
			</div>
			<div className='flex flex-col basis-1/4 gap-4'>
				{isMobile ? projects : skills}
				{certificates}
			</div>
		</main>
	);
}
