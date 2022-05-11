import { useQuery, UseQueryResult } from 'react-query';

import { ParsedMeal } from '@shared/types';

export const useGetShoppingListItemByMealId = (
	id: string,
	enabled: boolean
): UseQueryResult<ParsedMeal> => {
	return useQuery(
		'getShoppingListItemByMealId',
		() => fetch(`/api/shopping-list/${id}`).then((res) => res.json()),
		{
			keepPreviousData: true,
			enabled,
		}
	);
};
