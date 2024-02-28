import type { Metadata } from 'next';

import { Heading } from '@/components/ui/Heading';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import TasksView from './_components/task-view';

export const metadata: Metadata = {
	title: 'Задачи',
	...NO_INDEX_PAGE
};

const TasksPage = () => {
	return (
		<div>
			<Heading title='Задачи' />
			<TasksView />
		</div>
	);
};

export default TasksPage;
