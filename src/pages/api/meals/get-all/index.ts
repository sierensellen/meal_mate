import { Document, MongoClient, ObjectId } from 'mongodb';

import { Meal } from '@shared/types';
import { mapMeals } from '@shared/utils';

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
