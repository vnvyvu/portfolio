import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	header,
	main,
	footer,
}: Readonly<{
	children: React.ReactNode;
	header: React.ReactNode;
	footer: React.ReactNode;
	main: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='bg-[#dcdbe0]'>
					{header}
					{main}
					{footer}
				</div>
			</body>
		</html>
	);
}