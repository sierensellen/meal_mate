import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
	const { id } = req.query;

	if (req.method === 'GET') {
		const client = await MongoClient.connect(process.env.MONGODB_URI);
		const db = client.db('Meals');
		try {
			await db.collection('Shopping-List').deleteOne({ _id: new ObjectId(id) });
		} catch (err) {
			client.close();
			res.status(500).json({ message: 'Something went wrong...' });
		}

		client.close();
		res.status(201).json({ message: 'Item deleted successfully!' });
	}
}
