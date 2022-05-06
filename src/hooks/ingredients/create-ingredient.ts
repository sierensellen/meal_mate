import { useMutation } from 'react-query';

import { Ingredient } from '@shared/types';

export const useCreateIngredient = () => {
	return useMutation((data: Ingredient) =>
		fetch('/api/ingredients/create', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	);
};
