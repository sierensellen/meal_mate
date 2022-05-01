import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import { CardList, CardProps } from '@shared/components';
import { HomeProps } from '@shared/types/Home.types';

import { useGetMeals } from 'hooks/get-meals';
import { usePostMeal } from 'hooks/post-meal';

const Home: NextPage<HomeProps> = () => {
	/**
	 * hooks
	 */

	const { data: meals } = useGetMeals();

	/**
	 * effects
	 */

	// useEffect(() => {
	// 	meals && setMappedMeals(mapMeals(meals));
	// }, [meals]);

	/**
	 * mapping
	 */

	// console.log('mealcards', mealCards)

	/**
	 * render
	 */

	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>{meals && <CardList cards={meals} />}</main>
		</div>
	);
};

export default Home;
