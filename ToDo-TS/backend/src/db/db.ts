import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

(async () => {
	try {
		const db = await mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`);
		console.log('database is connected to:', db.connection.name);
	} catch (error) {
		console.log('Error:', error);
	}
})();
