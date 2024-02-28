'use client';

import Loader from '@/components/ui/Loader';

import { useLocalStorage } from '@/hooks/use-local-storage';

import { KanbanView } from './board-view/kanban-view';
import ListView from './list-view/list-view';
import { SwitcherView } from './switch-view';

export type TypeView = 'list' | 'kanban';

const TaskView = () => {
	const [type, setType, isLoading] = useLocalStorage<TypeView>({
		key: 'view-type',
		defaultValue: 'list'
	});

	if (isLoading) return <Loader />;

	return (
		<div>
			<SwitcherView
				setType={setType}
				type={type}
			/>
			{type === 'list' ? <ListView /> : <KanbanView />}
		</div>
	);
};

export default TaskView;
