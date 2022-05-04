import { useQuery } from 'react-query';

import { Meal } from '@shared/types';

export const useGetMeals = () => {
	return useQuery('meals', () => fetch('/api/meals/get-all').then((res) => res.json()), {
		keepPreviousData: true,
	});
};
