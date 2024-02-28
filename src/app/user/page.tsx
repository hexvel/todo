import { Metadata } from 'next';

import { Heading } from '@/components/ui/Heading';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import Statistics from './_components/statistics';

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
};

const DashboardPage = () => {
	return (
		<div>
			<Heading title='Статистика' />
			<Statistics />
		</div>
	);
};

export default DashboardPage;
