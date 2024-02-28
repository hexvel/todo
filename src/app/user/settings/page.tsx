import { Metadata } from 'next';

import { Heading } from '@/components/ui/Heading';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import SettingsForm from './_components/form';

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE
};

const SettingsPage = () => {
	return (
		<div>
			<Heading title='Настройки' />
			<SettingsForm />
		</div>
	);
};

export default SettingsPage;
