import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()


const DB = process.env.MONGO_URI
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

const Connection = async () => {
    try {
        await mongoose.connect(DB,connectionParams);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
