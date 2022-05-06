import Head from 'next/head';
import { useRouter } from 'next/router';
// import styles from 'styles/pages';

import { Card } from '@shared/components';

import { IngredientsList } from '@ingredients/IngredientsList';
import { useGetMeal } from 'hooks/meal/get-meal';

const MealDetail = () => {
	/**
	 * hooks
	 */

	const router = useRouter();
	const { id } = router.query;

	const { data: meal } = useGetMeal(id as string, !!id);

	return (
		<div className="container">
			<Head>
				<title>{meal && meal.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{meal && (
				<main className="detail-page">
					<Card {...meal} />
					<IngredientsList ingredients={meal.ingredients} />
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
