'use client';

import { DragDropContext } from '@hello-pangea/dnd';

import useTaskDnd from '@/hooks/use-task-dnd';
import useTasks from '@/hooks/use-tasks';

import { ListRowParent } from './list-row-parent';
import styles from './list-view.module.scss';
import { COLUMNS } from '@/data/columns.data';

const ListView = () => {
	const { items, setItems } = useTasks();
	const { onDragEnd } = useTaskDnd();

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={styles.header}>
					<div>Название</div>
					<div>Дата</div>
					<div>Приоритетность</div>
					<div></div>
				</div>

				<div className={styles.parentsWrapper}>
					{COLUMNS.map(column => (
						<ListRowParent
							items={items}
							label={column.label}
							value={column.value}
							setItems={setItems}
							key={column.value}
						/>
					))}
				</div>
			</div>
		</DragDropContext>
	);
};

export default ListView;
