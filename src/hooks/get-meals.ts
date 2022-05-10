import { useQuery } from 'react-query';

import { SortOrder, SortValue } from '@shared/types';

export const useGetMeals = (sortOrder: SortOrder, sortValue: SortValue) => {
	return useQuery(
		['meals', sortOrder, sortValue],
		() =>
			fetch('/api/meals/get-all', {
				method: 'POST',
				body: JSON.stringify({
					sortOrder: sortOrder,
					sortValue: sortValue,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}).then((res) => res.json()),
		{
			keepPreviousData: true,
		}
	);
};
