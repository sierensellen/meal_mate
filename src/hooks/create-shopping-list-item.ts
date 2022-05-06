import { useMutation } from 'react-query';

export const useCreateShoppingListItem = () => {
	return useMutation((id: string) =>
		fetch('/api/shopping-list/create', {
			method: 'POST',
			body: JSON.stringify({ mealId: id }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	);
};
