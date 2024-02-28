import { DropResult } from '@hello-pangea/dnd';

import useUpdateTask from './use-update-task';
import { FILTERS } from '@/data/columns.data';

const useTaskDnd = () => {
	const { updateTask } = useUpdateTask();

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) {
			return;
		}

		const destinationColId = result.destination.droppableId;

		if (destinationColId === result.source.droppableId) {
			return;
		}

		if (destinationColId === 'completed') {
			updateTask({
				id: result.draggableId,
				data: {
					isCompleted: true
				}
			});

			return;
		}

		const newCreatedAt = FILTERS[destinationColId].format();

		updateTask({
			id: result.draggableId,
			data: {
				createdAt: newCreatedAt,
				isCompleted: false
			}
		});
	};

	return { onDragEnd };
};

export default useTaskDnd;
