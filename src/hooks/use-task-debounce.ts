import debounce from 'lodash.debounce';
import { useCallback, useEffect } from 'react';
import { UseFormWatch } from 'react-hook-form';

import { TypeTaskFormState } from '@/types/task.types';

import useCreateTask from './use-create-task';
import useUpdateTask from './use-update-task';

interface IUseTaskDebounce {
	watch: UseFormWatch<TypeTaskFormState>;
	itemId: string;
}

const useTaskDebounce = ({ watch, itemId }: IUseTaskDebounce) => {
	const { createTask } = useCreateTask();
	const { updateTask } = useUpdateTask();

	const debounceCreateTask = useCallback(
		debounce((formData: TypeTaskFormState) => {
			createTask(formData);
		}, 400),
		[]
	);

	const deboundeUpdateTask = useCallback(
		debounce((formData: TypeTaskFormState) => {
			updateTask({ id: itemId, data: formData });
		}, 400),
		[]
	);

	useEffect(() => {
		const { unsubscribe } = watch(formData => {
			if (itemId) {
				deboundeUpdateTask({
					...formData,
					priority: formData.priority || undefined
				});
			} else {
				debounceCreateTask({
					...formData
				});
			}
		});

		return () => {
			unsubscribe();
		};
	}, [watch(), deboundeUpdateTask, debounceCreateTask]);
};

export default useTaskDebounce;
