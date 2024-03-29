'use client';

import cn from 'clsx';
import { GripVertical, Loader, Trash } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Checkbox from '@/components/ui/checkbox';
import { TransparentField } from '@/components/ui/fields/TransparentField';
import { SingleSelect } from '@/components/ui/task-edit/SingleSelect';
import { DatePicker } from '@/components/ui/task-edit/date-picker/DatePicker';

import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types';

import useDeleteTask from '@/hooks/use-delete-task';
import useTaskDebounce from '@/hooks/use-task-debounce';

import styles from './list-view.module.scss';

interface IListRow {
	item: ITaskResponse;
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

const ListRow = ({ item, setItems }: IListRow) => {
	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			priority: item.priority,
			createdAt: item.createdAt,
			isCompleted: item.isCompleted
		}
	});

	const priorityList = ['high', 'medium', 'low'];

	const { deleteTask, isDeletePending } = useDeleteTask();

	useTaskDebounce({ watch, itemId: item.id });
	return (
		<div
			className={cn(
				styles.row,
				watch('isCompleted') ? styles.completed : '',
				'animation-opacity'
			)}
		>
			<div>
				<span className='inline-flex items-center gap-2.5	w-full'>
					<button aria-describedby='todo-item'>
						<GripVertical />
					</button>
					<Controller
						control={control}
						name='isCompleted'
						render={({ field: { value, onChange } }) => (
							<Checkbox
								onChange={onChange}
								checked={value}
							/>
						)}
					/>

					<TransparentField {...register('name')} />
				</span>
			</div>
			<div>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>
			<div className='capitalize'>
				<Controller
					control={control}
					name='priority'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={priorityList.map(item => ({
								label: item,
								value: item
							}))}
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>
			<div>
				<button
					onClick={() => {
						item.id
							? deleteTask(item.id)
							: setItems(prev => prev?.slice(0, -1));
					}}
					className='opacity-50 transition-opacity hover:opacity-100'
				>
					{isDeletePending ? <Loader size='15' /> : <Trash size='15' />}
				</button>
			</div>
		</div>
	);
};

export default ListRow;
