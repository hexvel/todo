'use client';

import { DragDropContext } from '@hello-pangea/dnd';

import useTaskDnd from '@/hooks/use-task-dnd';
import useTasks from '@/hooks/use-tasks';

import { KanbanColumn } from './kanban-column';
import styles from './kanban-view.module.scss';
import { COLUMNS } from '@/data/columns.data';

export function KanbanView() {
	const { items, setItems } = useTasks();
	const { onDragEnd } = useTaskDnd();

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.board}>
				{COLUMNS.map(column => (
					<KanbanColumn
						key={column.value}
						value={column.value}
						label={column.label}
						items={items}
						setItems={setItems}
					/>
				))}
			</div>
		</DragDropContext>
	);
}
