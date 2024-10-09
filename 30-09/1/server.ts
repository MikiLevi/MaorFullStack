import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(express.json());

const PORT: string = process.env.PORT || "3000";

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});