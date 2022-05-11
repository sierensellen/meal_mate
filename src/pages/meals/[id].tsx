import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Card } from '@shared/components';

import { IngredientsList } from '@ingredients/IngredientsList';
import { useGetMeal } from 'hooks/meal/get-meal';
import { useCreateShoppingListItem } from 'hooks/shopping-list/create-shopping-list-item';
import { useDeleteShoppingListItem } from 'hooks/shopping-list/delete-shopping-list-item';
import { useGetShoppingListItemByMealId } from 'hooks/shopping-list/get-shopping-list-item-by-meal-id';

const MealDetail = () => {
	/**
	 * hooks
	 */
	const router = useRouter();
	const { id } = router.query;

	const { data: shoppingListItem } = useGetShoppingListItemByMealId(
		id as string,
		typeof id === 'string'
	);
	const { mutateAsync: createListItem } = useCreateShoppingListItem();
	const { mutateAsync: deleteListItem } = useDeleteShoppingListItem();

	const { data: meal } = useGetMeal(id as string, !!id);

	return (
		<div className="container">
			<Head>
				<title>{meal && meal.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{meal && (
				<main className="detail-page">
					<Card meal={meal} />
					<IngredientsList ingredients={meal.ingredients} />
					<Button onClick={() => createListItem(meal.id)}>Op het lijstje</Button>
					<Button onClick={() => deleteListItem(meal.id)}>Remove</Button>
					<div className="detail-page--method">
						<p>Dit is hoe het moet: </p>
						<p>{meal.method}</p>
					</div>
				</main>
			)}
		</div>
	);
};

export default MealDetail;
