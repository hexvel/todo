import { useEffect } from 'react';
import { UseFormReset } from 'react-hook-form';

import { TypeUserForm } from '@/types/auth.types';

import { useProfile } from './use-profile';

const useInitialData = (reset: UseFormReset<TypeUserForm>) => {
	const { data, isSuccess } = useProfile();

	useEffect(() => {
		if (isSuccess && data) {
			reset({
				email: data.user.email,
				name: data.user.name,
				breakInterval: data.user.breakInterval,
				workInterval: data.user.workInterval,
				intervalCount: data.user.intervalCount
			});
		}
	}, [isSuccess]);
};

export default useInitialData;
