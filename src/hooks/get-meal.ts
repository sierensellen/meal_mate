import { useQuery } from 'react-query';

export const useGetMeal = (id: string, enabled: boolean) => {
	return useQuery('meals', () => fetch(`/api/meals/${id}`).then((res) => res.json()), {
		keepPreviousData: true,
		enabled,
	});
};
