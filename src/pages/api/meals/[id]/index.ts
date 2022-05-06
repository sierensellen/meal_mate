import { Document, MongoClient, ObjectId } from 'mongodb';

import { CardProps, Icons } from '@shared/components';
import { Meal } from '@shared/types';
import { mapWashing } from '@shared/utils';

export default async function handler(req, res) {
	const { id } = req.query;

	if (req.method === 'GET') {
		const client = await MongoClient.connect(process.env.MONGODB_URI);
		const db = client.db('Meals');
		const meal = await db
			.collection('Meals')
			.find({ _id: new ObjectId(id) })
			.next();

		const ingredients = await db
			.collection('Ingredients-Meal')
			.find({ meal_id: new ObjectId(id) })
			.toArray();

		const mappedIngredients = await Promise.all(
			ingredients.map(async (ingredient) => {
				const foundIngredient = await db
					.collection('Ingredients')
					.find({ _id: new ObjectId(ingredient.ingredient_id) })
					.next();

				ingredient.metric = foundIngredient.metric;
				ingredient.name = foundIngredient.name;
				return ingredient;
			})
		);

		// Map over meals when ingredients
		// const mealsWithIngredients = await getIngredients(db, meals);
		const mappedMeal = {
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
			// iconse: meal.icons,
			color: meal.color,
			bgColor: meal.bgColor,
			rotation: meal.rotation,
			scale: meal.scale,
			posX: meal.positionX,
			posY: meal.positionY,
			id: meal._id,
			method: meal.method,
			ingredients: mappedIngredients,
		};
		// const mappedMeals = mapMeals(mealsWithIngredients);

		client.close();
		res.status(201).json(mappedMeal);
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
