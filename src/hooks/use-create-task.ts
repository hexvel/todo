import { useMutation, useQueryClient } from '@tanstack/react-query';

import { taskService } from '@/services/task.service';

const useCreateTask = () => {
	const queryClient = useQueryClient();

	const { mutate: createTask } = useMutation({
		mutationKey: ['create-task'],
		mutationFn: (data: any) => taskService.createTask(data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		}
	});

	return { createTask };
};

export default useCreateTask;
