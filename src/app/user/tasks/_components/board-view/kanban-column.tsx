import { Draggable, Droppable } from '@hello-pangea/dnd';
import type { Dispatch, SetStateAction } from 'react';

import type { ITaskResponse } from '@/types/task.types';

import { filterTasks } from '../filter-tasks';

import { KanbanAddCardInput } from './kanban-add-card-input';
import { KanbanCard } from './kanban-card';
import styles from './kanban-view.module.scss';
import { FILTERS } from '@/data/columns.data';

interface IKanbanColumn {
	value: string;
	label: string;
	items: ITaskResponse[] | undefined;
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

export function KanbanColumn({ value, items, label, setItems }: IKanbanColumn) {
	return (
		<Droppable droppableId={value}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					<div className={styles.column}>
						<div className={styles.columnHeading}>{label}</div>

						{filterTasks(items, value)?.map((item, index) => (
							<Draggable
								key={item.id}
								draggableId={item.id}
								index={index}
							>
								{provided => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									>
										<KanbanCard
											key={item.id}
											item={item}
											setItems={setItems}
										/>
									</div>
								)}
							</Draggable>
						))}

						{provided.placeholder}

						{value !== 'completed' && !items?.some(item => !item.id) && (
							<KanbanAddCardInput
								setItems={setItems}
								filterDate={
									FILTERS[value] ? FILTERS[value].format() : undefined
								}
							/>
						)}
					</div>
				</div>
			)}
		</Droppable>
	);
}
