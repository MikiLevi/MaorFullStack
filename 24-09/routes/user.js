import express from 'express'
import { getUsers } from "../controllers/user.js";

const userRouter = express.Router()

userRouter.get("/users", getUsers)

userRouter.get("/users/:id", getById)

export default userRouter
