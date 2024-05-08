import { Section } from '@/app/_components/section';
import { Project } from './_project';

export default async function Projects() {
	return (
		<Section title='Projects'>
			<Project
				projectName='Restaurants Managerment System'
				date='2021'
				company='Cormatek'
				role='Backend Developer, Frontend Web Developer'
				technologies='Backend (NestJS, GraphQL, MongoDB), Web app (ReactJS),
        Mobile app (React Native), CMS (ReactJS)'
				achievements={[
					'This project aims to manage a restaurant chain, enabling administrators to oversee menu items, discount programs, and generate periodic reports. Additionally, it allows customers to make reservations and purchase items either via the web, mobile application, or through self-service kiosks.',
					'The payment system supports card swiping with POS machines, through SumUp and Vipps.',
					'The printer and cash drawer are integrated into the system.',
					'Able to use basic features of pm2.',
				]}
			/>
			<Project
				projectName='Home Applicance Chain Managerment System'
				date='2021'
				company='Cormatek'
				role='Backend Developer'
				technologies='Backend (NestJS, GraphQL, MongoDB), Web app (ReactJS), CMS (ReactJS)'
				achievements={[
					'This project is essentially similar to project "Restaurants Managerment System" but with lower complexity.',
					'Integration with Bring Shipping',
				]}
			/>
			<Project
				projectName='Grocery Store Inventory Management System'
				date='2022'
				company='Cormatek'
				role='Backend Developer'
				technologies='Backend (NestJS, GraphQL, MongoDB), Web app (ReactJS), CMS (ReactJS)'
				achievements={[
					'This project is built to manage warehouses and sales. Its basic functionalities are similar to KiotViet.',
					'Understanding how to handle data inconsistency issues in Distributed Systems',
					'Understanding how to secure GraphQL',
					'Further understanding of BullMQ',
					'Have basic understanding of ElasticSearch',
				]}
			/>
			<Project
				projectName='WaterGraph'
				date='2023'
				company='Pionero'
				role='Frontend Developer'
				technologies='Backend (NodeJS, DynamoDB), Web app (ReactJS)'
				achievements={[
					'Monitor rainfall data from IoT devices, visualize them on charts and maps of Japan, and predict floods.',
					'Proficient in basic usage of the Leaflet library and DynamoDB.',
				]}
			/>
			<Project
				projectName='NextContentManager'
				date='2023'
				company='Pionero'
				role='Backend Developer, Frontend Developer'
				technologies='Backend (NestJS, MariaDB, Python, Blender), Web app (ReactJS, Augmented Reality)'
				achievements={[
					'Create, edit, and manage 3D files on the Web platform. Display 3D files in AR environment on iOS and Android devices with 3 modes: Image Tracking, World Tracking, Face Tracking.',
					'Developing the 3D editor module and AR modes, which are core functionalities in this project',
					'Proficient in basic usage of the ThreeJS, Augumented Reality libraries',
					'Proficient in basic usage of the Prisma',
				]}
			/>
			<Project
				projectName='LawfirmGPT'
				date='2024'
				company='Pionero'
				role='Prompt Engineering'
				technologies='ChatGPT 4.0'
				achievements={[
					'Customize ChatGPT to gather information about Vietnamese law and answer questions according to a fixed format',
				]}
			/>
			<Project
				projectName='Hospital Auto Report Generator'
				date='2024'
				company='Pionero'
				role='Developer'
				technologies='Python, GoogleAppScript, AWS Lambda, AWS S3'
				achievements={[
					'Automating user registration for patients arriving for medical appointments and automatically generating profile files based on crawled data',
					'Proficient in basic usage of AWS Lambda and AWS S3',
				]}
			/>
		</Section>
	);
}
