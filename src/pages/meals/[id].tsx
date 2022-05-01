import Head from 'next/head';
import { useRouter } from 'next/router';

const MealDetail = () => {
	/**
	 * hooks
	 */

	const router = useRouter();
	console.log(router);
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<p>dit is een meal detail page </p>
			</main>
		</div>
	);
};

export default MealDetail;
