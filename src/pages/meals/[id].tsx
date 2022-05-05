import Head from 'next/head';
import { useRouter } from 'next/router';
// import styles from 'styles/pages';

import { Card, Illustration, Tag } from '@shared/components';

import { IngredientsList } from '@ingredients/IngredientsList';
import { useGetMeal } from 'hooks/get-meal';

const MealDetail = () => {
	/**
	 * hooks
	 */

	const router = useRouter();
	const { id } = router.query;
	console.log('page', id);

	const { data: meal } = useGetMeal(id as string, !!id);
	console.log('meal', meal);
	meal && console.log(meal.color);

	return (
		<div className="container">
			<Head>
				<title>{meal && meal.titel}</title>
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
