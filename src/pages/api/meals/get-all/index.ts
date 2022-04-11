import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const data = req.body;
        const client = await
            MongoClient.connect(
                process.env.MONGODB_URI);
        const db = client.db("Meals");
        const meals = await db.collection("Meals").find({}).toArray();

        // Map over meals
        const parsedMeals = await Promise.all(meals.map(async meal => {

            // Map over ingredient ids
            meal.ingredients = await Promise.all(meal.ingredients.map(async ingredientId => {
                const ingredientObject = await db.collection("Ingredients").find({ _id: new ObjectId(ingredientId) }).toArray();
                console.log(JSON.parse(JSON.stringify(ingredientObject)));

                return JSON.parse(JSON.stringify(ingredientObject[0]));
            }));

            return meal;
        }));

        client.close();
        // res.status(201).json({ message: "Data inserted successfully!" });
        res.json(parsedMeals);
    }
}