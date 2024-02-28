'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/buttons/Button';
import { Field } from '@/components/ui/fields/Field';

import { TypeUserForm } from '@/types/auth.types';

import useInitialData from '@/hooks/get-initial-data';
import useUpdateSettings from '@/hooks/use-update-settings';

const SettingsForm = () => {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	});

	useInitialData(reset);
	const { mutate, isPending } = useUpdateSettings();

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data;

		mutate({
			...rest,
			password: password || undefined
		});
	};

	return (
		<div>
			<form
				className='w-2/4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-2 gap-10'>
					<div>
						<Field
							id='email'
							label='Почта'
							placeholder='Введите почту'
							type='email'
							{...register('email', {
								required: 'Обязательное поле!'
							})}
							extra='mb-4'
						/>
						<Field
							id='name'
							label='Имя'
							placeholder='Введите своё имя'
							{...register('name')}
							extra='mb-4'
						/>
						<Field
							id='password'
							label='Пароль'
							placeholder='Введите пароль'
							type='password'
							{...register('password')}
							extra='mb-10'
						/>
					</div>
					<div>
						<Field
							id='workInterval'
							label='Рабочий интервал (в мин): '
							placeholder='Введите интервал (в мин): '
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>
						<Field
							id='breakInterval'
							label='Интервал отдыха (в мин): '
							placeholder='Введите интервал отдыха (в мин): '
							isNumber
							{...register('breakInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>
						<Field
							id='intervalCount'
							label='Кол-во интервалов'
							placeholder='Кол-во интервалов (макс: 10): '
							isNumber
							{...register('intervalCount', {
								valueAsNumber: true
							})}
							extra='mb-6'
						/>
					</div>
				</div>
				<Button
					type='submit'
					disabled={isPending}
				>
					Сохранить
				</Button>
			</form>
		</div>
	);
};

export default SettingsForm;
