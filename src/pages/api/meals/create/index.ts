import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;
		const mappedMeal = mapMeal(data);
		const client = await MongoClient.connect(process.env.MONGODB_URI);
		const db = client.db('Meals');
		const resultMeals = await insertOne(db, 'Meals', mappedMeal);
		const mappedIngredients = mapIngredients(data, resultMeals);
		const resultIngredients = await insertMany(db, 'Ingredients-Meal', mappedIngredients);
		client.close();
		res.status(201).json({ message: 'Data inserted successfully!' });
	}
}

const mapIngredients = (data, meal) => {
	const mappedIngredients = data.ingredients.map((ingredient) => {
		return {
			ingredient_id: ingredient._id,
			amount: ingredient.amount,
			meal_id: meal.insertedId,
		};
	});

	return mappedIngredients;
};

const mapMeal = (meal) => {
	const mappedMeal = {
		bgColor: meal.bgColor,
		color: meal.color,
		freezer: meal.freezer,
		name: meal.name,
		positionX: meal.positionX,
		positionY: meal.positionY,
		price: meal.price,
		rotation: meal.rotation,
		scale: meal.scale,
		time: meal.time,
		washing: meal.washing,
		method: meal.method,
	};
	return mappedMeal;
};

const insertOne = async (db, collection, data) => {
	const yourCollection = db.collection(collection);
	const result = await yourCollection.insertOne(data);

	return result;
};

const insertMany = async (db, collection, data) => {
	const yourCollection = db.collection(collection);
	const result = await yourCollection.insertMany(data);

	return result;
};
