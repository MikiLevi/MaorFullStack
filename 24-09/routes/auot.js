import express from 'express'
const auotRouter = express.Router()

auotRouter.post("/signUp", signUp)


export default auotRouter