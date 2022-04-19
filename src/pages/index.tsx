import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { CardList, CardProps, CheckboxSlider, Icons, Input, Select } from '@shared/components';
import { checkboxSliderMock } from '@shared/components/CheckboxSlider/checkboxSlider.mock';
import { inputMock } from '@shared/components/Input/input.mock';
import { selectMock } from '@shared/components/Select/select.mock';
import { Meal } from '@shared/types';
import { HomeProps } from '@shared/types/Home.types';

import { useGetMeals } from 'hooks/get-meals';
import { usePostMeal } from 'hooks/post-meal';

const Home: NextPage<HomeProps> = () => {
	/**
	 * hooks
	 */

	const { data: meals, refetch: refetchMeals } = useGetMeals();
	const { mutate: postMeal, isLoading: isLoadingPostMeal } = usePostMeal(refetchMeals);

	/**
	 * state
	 */

	const [mappedMeals, setMappedMeals] = useState<CardProps[]>([]);

	/**
	 * effects
	 */

	useEffect(() => {
		meals && setMappedMeals(mapMeals(meals));
	}, [meals]);

	/**
	 * mapping
	 */
	const mapMeals = (meals: Meal[]): CardProps[] => {
		return meals.map((meal) => {
			const icons = [];

			meal.vriezer && icons.push(Icons.Vriezer);

			return {
				title: meal.title,
				img: { path: meal.image, alt: meal.title },
				tags: [
					{
						label: meal.price,
						iconName: Icons.Vriezer,
					},
					{
						label: meal.afwas,
						iconName: Icons.Vriezer,
					},
					{
						label: meal.tijd,
						iconName: Icons.Vriezer,
					},
				],
				icons,
			};
		});
	};

	// console.log('mealcards', mealCards)

	const clickHandler = () => {
		const enteredData: Meal = {
			title: 'test',
			ingredients: [],
			afwas: 'veel',
			image: '/',
			price: 'test',
			tijd: 'test',
			vriezer: true,
		};
		postMeal(enteredData);
	};

	/**
	 * render
	 */

	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Input big={false} {...inputMock} />
			<Select {...selectMock} />
			<Input big={true} {...inputMock} />
			<CheckboxSlider {...checkboxSliderMock} />
			<main>
				{mappedMeals && <CardList cards={mappedMeals} />}
				<button onClick={clickHandler}>test</button>

				{isLoadingPostMeal && <p>loading</p>}
			</main>
		</div>
	);
};

// export async function getServerSideProps(context) {
//   try {
//     // client.db() will be the default database passed in the MONGODB_URI
//     // You can change the database by calling the client.db() function and specifying a database like:
//     // const db = client.db("myDatabase");
//     // Then you can execute queries against your database like so:
//     // db.find({}) or any of the MongoDB Node Driver commands
//     // const client = await clientPromise;
//     // const db = client.db("Meals");
//     // const meals = await db.collection("Meals").find({}).toArray();

//     // // Map over meals
//     // const parsedMeals = await Promise.all(meals.map(async meal => {

//     //   // Map over ingredient ids
//     //   meal.ingredients = await Promise.all(meal.ingredients.map(async ingredientId => {
//     //     const ingredientObject = await db.collection("Ingredients").find({ _id: new ObjectId(ingredientId) }).toArray();
//     //     console.log(JSON.parse(JSON.stringify(ingredientObject)));

//     //     return JSON.parse(JSON.stringify(ingredientObject[0]));
//     //   }));

//     //   return meal
//     // }));

//     return {
//       props: { isConnected: true },
//     }
//   } catch (e) {
//     console.error(e)
//     return {
//       props: { isConnected: false },
//     }
//   }
// }

export default Home;
