import { useMutation } from 'react-query';

import { Meal } from '@shared/types';

export const usePostMeal = () => {
	return useMutation((data: Meal) =>
		fetch('/api/meals/create', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	);
};
