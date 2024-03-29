import mongoose from "mongoose";


export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Connected to DB");
        })

        connection.on('error', (err) => {
            console.log("Connection error, please make sure db is up and running : " + err);
            process.exit();
        })
    }
    catch (error) {
        console.log("Something went wrong in connecting to DB");
        console.log(error);
    }
}