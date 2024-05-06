import { Badges } from '@/app/_components/badges';
import { Section } from '@/app/_components/section';

export default async function Skills() {
	return (
		<Section title='Skills'>
			<div className='flex flex-col gap-4'>
				<Badges
					badges={[
						'ReactJS',
						'NextJS',
						'Tailwind',
						'Redux',
						'ThreeJS',
						'Augumented Reality',
					]}
					title='FRONTEND'
					divider
				/>
				<Badges
					badges={[
						'NestJS',
						'RestAPI',
						'GraphQL',
						'Prisma',
						'TypeORM',
						'MongoDB',
						'MySQL',
						'Elasticsearch',
						'Redis',
						'BullMQ',
					]}
					title='BACKEND'
					divider
				/>
				<Badges
					badges={[
						'VPC',
						'EC2',
						'ELB',
						'RDS',
						'SQS',
						'SNS',
						'Event Bridge',
						'IAM',
						'CloudFront',
						'CloudWatch',
					]}
					title='CLOUD'
					divider
				/>
				<Badges badges={['Git', 'Docker', 'PM2']} title='TOOLS' />
			</div>
		</Section>
	);
}
