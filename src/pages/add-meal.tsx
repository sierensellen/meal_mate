import { NextPage } from 'next';
import Head from 'next/head';

import { AddMealForm } from '@meals/components/AddMealForm';

const AddMealPage: NextPage = () => {
	/**
	 * render
	 */

	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<AddMealForm />
			</main>
		</div>
	);
};

export default AddMealPage;
