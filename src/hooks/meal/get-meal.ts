import { useQuery, UseQueryResult } from 'react-query';

import { ParsedMeal } from '@shared/types';

export const useGetMeal = (id: string, enabled: boolean): UseQueryResult<ParsedMeal> => {
	return useQuery('meal', () => fetch(`/api/meals/${id}`).then((res) => res.json()), {
		keepPreviousData: true,
		enabled,
	});
};
