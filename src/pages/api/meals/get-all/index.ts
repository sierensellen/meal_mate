import { Document, MongoClient, ObjectId } from 'mongodb';

import { CardProps, Icons } from '@shared/components';
import { Meal } from '@shared/types';
import { mapWashing } from '@shared/utils';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const client = await MongoClient.connect(process.env.MONGODB_URI);
		const db = client.db('Meals');
		const meals = await db.collection('Meals').find({}).toArray();

		// Map over meals when ingredients
		const mealsWithIngredients = await getIngredients(db, meals);

		const mappedMeals = mapMeals(mealsWithIngredients);

		client.close();
		res.status(201).json(mappedMeals);
	}
}

const getIngredients = async (db, meals: Document[]): Promise<Meal[]> => {
	const parsedMeals = await Promise.all(
		meals.map(async (meal) => {
			// Map over ingredient ids
			if (meal.ingredients) {
				meal.ingredients = await Promise.all(
					meal.ingredients.map(async (ingredientId) => {
						const ingredientObject = await db
							.collection('Ingredients')
							.find({ _id: new ObjectId(ingredientId) })
							.toArray();
						console.log(JSON.parse(JSON.stringify(ingredientObject)));

						return JSON.parse(JSON.stringify(ingredientObject[0]));
					})
				);
			} else {
				meal.ingredients = [];
			}

			return meal;
		})
	);
	return parsedMeals as Meal[];
};

const mapMeals = (meals: Meal[]): CardProps[] => {
	return meals.map((meal) => {
		const icons = [];

		meal.freezer && icons.push(Icons.Vriezer);

		return {
			title: meal.name,
			tags: [
				{
					label: meal.price,
					iconName: Icons.Vriezer,
				},
				{
					label: mapWashing(meal.washing),
					iconName: Icons.Vriezer,
				},
				{
					label: meal.time,
					iconName: Icons.Vriezer,
				},
			],
			icons,
			color: meal.color,
			bgColor: meal.bgColor,
			rotation: meal.rotation,
			scale: meal.scale,
			posX: meal.positionX,
			posY: meal.positionY,
			id: meal._id,
		};
	});
};
