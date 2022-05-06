import { useQuery, UseQueryResult } from 'react-query';

import { CardProps } from '@shared/components';

export const useGetMeals = (): UseQueryResult<CardProps[]> => {
	return useQuery('meals', () => fetch('/api/meals/get-all').then((res) => res.json()), {
		keepPreviousData: true,
	});
};
