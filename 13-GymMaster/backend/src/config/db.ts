import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        const db = await mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`)
        console.log('Database is connected to:', db.connection.name);
        console.log(db.connection.host + ':' + db.connection.port);
    } catch (error) {
        if (error instanceof Error) {
            console.log(`error: ${error.message}`);
        } else {
            console.log('Caught an unexpected error');
        }
        process.exit(1)
    }
}

export default connectDB
