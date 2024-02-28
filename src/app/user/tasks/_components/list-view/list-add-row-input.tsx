import { type Dispatch, type SetStateAction } from 'react';

import { ITaskResponse } from '@/types/task.types';

import styles from './list-view.module.scss';

interface IListAddRowInput {
	filterDate?: string;
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}
const ListAddRowInput = ({ setItems, filterDate }: IListAddRowInput) => {
	const addRow = () => {
		setItems(prev => {
			if (!prev) return;

			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate
				}
			];
		});
	};

	return (
		<div className={styles.addRow}>
			<button
				onClick={addRow}
				className='italic opacity-40 text-sm'
			>
				Добавить задачу...
			</button>
		</div>
	);
};

export default ListAddRowInput;
