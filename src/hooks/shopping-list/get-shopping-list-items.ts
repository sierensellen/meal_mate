import { useQuery, UseQueryResult } from 'react-query';

import { ShoppingListItem } from '@shared/types';

export const useGetShoppingListItems = (): UseQueryResult<ShoppingListItem[]> => {
	return useQuery('meals', () => fetch('/api/shopping-list/get-all').then((res) => res.json()), {
		keepPreviousData: true,
	});
};
