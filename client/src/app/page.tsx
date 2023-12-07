'use client';
import { ReactIcon } from '@/components/ReactIcon.component';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthService, OpenAPI } from '../../client_sdk';

OpenAPI.BASE = process.env.NEXT_PUBLIC_BASE_URL!;

export default function Home() {
	const [user, setUser] = useState();

	const handleGoogleLogin = () => {
		// Open a new window with the Google authentication URL
		const authWindow = window.open(
			`${OpenAPI.BASE}/auth/google`,
			'_blank',
			'width=500,height=500',
		);

		if (authWindow) {
			const timer = setInterval(async () => {
				if (authWindow.closed) {
					const authData =
						await AuthService.authControllerGoogleRedirect();

					if (authData) {
						setUser(authData);
					}

					clearInterval(timer);
				}
			}, 500);
		}
	};

	return (
		<div className='flex w-full h-screen'>
			<ReactIcon
				htmlFor='login_google'
				icon={FcGoogle}
				onClick={handleGoogleLogin}
			/>
			<div>{JSON.stringify(user)}</div>
			{/* <div className='flex flex-col w-[25%]'>
				<Image
					className='rounded-full max-w-xs'
					src='/home/avatar.jpg'
					alt='avatar'
					fill
				/>
				<h1>VŨ CHÍ VỸ</h1>
				<span>Fullstack Web Developer</span>
				<div>
					<div></div>
					<h2>Overview</h2>
					<span>Github</span>
					<span>15/01/1999</span>
					<span>Học viện Công nghệ Bưu chính Viễn thông</span>
					<span>Infomation Security</span>
				</div>
				<div>
					<h2>Core Skills</h2>
					<ul>
						<li>
							NestJS, SocketIO, Microservice, Redis, GraphQL,
							Serverless
						</li>
						<li>MongoDB, TypeORM, Prisma</li>
						<li>ReactJS, Redux, Tailwind, NextJS</li>
						<li>
							ThreeJS, R3F, model-viewer, Augumented Reality,
							WebRTC
						</li>
						<li>AWS Lambda, EC2, S3, SES, VPC, Terraform</li>
						<li>Git, CI/CD, Docker, NGINX</li>
					</ul>
				</div>
			</div>
			<div className='flex'></div> */}
		</div>
	);
}
