import express, { Application } from "express";
import dotenv from "dotenv";
import router  from "./routing/user.routing";

dotenv.config();
const app: Application = express();
const PORT: number | string = process.env.PORT || "3000";

app.use(express.json());
app.use(router)

app.listen(PORT, () => {
    console.log(`Listen to ${PORT}`);
})
