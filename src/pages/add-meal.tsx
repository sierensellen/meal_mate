import { NextPage } from 'next';
import Head from 'next/head';

import { Button, Icon, Icons } from '@shared/components';
import { Sidebar } from '@shared/components/Sidebar';

import { AddMealForm } from '@meals/components/AddMealForm';

const AddMealPage: NextPage = () => {
	/**
	 * render
	 */

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="container">
				<Sidebar />
				<div className="content_with_sidebar">
					<AddMealForm />
				</div>
			</main>
		</div>
	);
};

export default AddMealPage;
