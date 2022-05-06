import { useQuery, UseQueryResult } from 'react-query';

import { CardProps } from '@shared/components';

export const useGetMeal = (id: string, enabled: boolean): UseQueryResult<CardProps> => {
	return useQuery('meals', () => fetch(`/api/meals/${id}`).then((res) => res.json()), {
		keepPreviousData: true,
		enabled,
	});
};
