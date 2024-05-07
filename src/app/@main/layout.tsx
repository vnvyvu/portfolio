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
		<main className='flex px-8 py-4 bg-white text-black gap-4 shadow-md'>
			<div className='flex flex-col basis-3/4 gap-4'>
				{summary}
				{projects}
			</div>
			<div className='flex flex-col basis-1/4 gap-4'>
				{skills}
				{certificates}
			</div>
		</main>
	);
}
