import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const client = await MongoClient.connect(process.env.MONGODB_URI);
		const db = client.db('Meals');
		const ingredients = await db.collection('Ingredients').find({}).toArray();

		client.close();
		res.json(ingredients);
	}
}
