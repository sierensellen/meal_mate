import { NextPage } from 'next';
import Head from 'next/head';

import { CardList } from '@shared/components';
import { HomeProps } from '@shared/types/Home.types';

import { useGetMeals } from 'hooks/meal/get-meals';

const Home: NextPage<HomeProps> = () => {
	/**
	 * hooks
	 */

	const { data: meals } = useGetMeals();

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
