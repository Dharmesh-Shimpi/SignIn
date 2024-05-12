import app from './route.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
async function connectToDB() {
	try {
		await mongoose.connect(process.env.MONGO_URL);
	} catch (error) {
		console.log(error);
	}
}

app.listen(process.env.PORT, () => {
	connectToDB();
	console.log(`Server is running on port ${process.env.PORT}`);
});
