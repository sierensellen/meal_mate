import { useMutation } from 'react-query';

export const useDeleteShoppingListItem = () => {
	return useMutation((id: string) =>
		fetch(`api/shopping-list/delete/${id}`).then((res) => res.json())
	);
};
