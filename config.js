import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;

export const mongoDBURL = process.env.MONGO_DB_URL;

//mongodb+srv://root:root@books-store-mern.c7ba8z1.mongodb.net/books-collection?retryWrites=true&w=majority