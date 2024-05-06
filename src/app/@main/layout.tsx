export default async function MainLayout({
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
	return (
		<main className='flex p-8 bg-white text-black gap-8 shadow-md'>
			<div className='flex flex-col basis-2/3 gap-4'>
				{summary}
				{projects}
			</div>
			<div className='flex flex-col basis-1/3 gap-4'>
				{skills}
				{certificates}
			</div>
		</main>
	);
}
