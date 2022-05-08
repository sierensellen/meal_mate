import { useQuery, UseQueryResult } from 'react-query';

import { ParsedMeal } from '@shared/types';

export const useGetMeals = (): UseQueryResult<ParsedMeal[]> => {
	return useQuery('meals', () => fetch('/api/meals/get-all').then((res) => res.json()), {
		keepPreviousData: true,
	});
};
