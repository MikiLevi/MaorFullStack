import express from "express";
import { getUsersById, postUser } from "../controller/user.controller";

const userRouter = express.Router();
userRouter.get("/user/:id", getUsersById)

userRouter.post("/user/register", postUser)

export default userRouter

