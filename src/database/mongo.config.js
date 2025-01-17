import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Successfully connected');
    } catch (err) {
        console.error('Internal error occurred', err);
    }
}