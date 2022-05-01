import { useQuery } from 'react-query';

export const useGetIngredients = () => {
	return useQuery(
		'ingredients',
		() => fetch('/api/meals/get-ingredients').then((res) => res.json()),
		{
			keepPreviousData: true,
		}
	);
};
