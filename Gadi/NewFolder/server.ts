import express, { Application } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js"
import { errorHandler } from "./middlewars/errorHandler.js";
import bookRouter from "./routes/booksRouter.js"
dotenv.config();

const app: Application = express();

app.use(express.json());

app.use("/users", userRouter)
app.use("/books", bookRouter)

app.use(errorHandler);

const PORT: string = process.env.PORT || "3000";

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});