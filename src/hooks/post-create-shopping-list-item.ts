import { useMutation } from 'react-query';

export const usePostCreateShoppingListItem = () => {
	return useMutation((id: string) =>
		fetch('/api/shopping-list/create', {
			method: 'POST',
			body: JSON.stringify({ id }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	);
};
