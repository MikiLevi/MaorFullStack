import express from 'express'
import userRouter from "./routes/user.js"
import auotRouter from "./routes/auot.js"

const app = express()
// לוקח את המטודה של גייסון מאקספרס
app.use(express.json())
app.use(userRouter)
app.use(auotRouter)
const port = 8080
app.listen(port, () => {
    console.log("Hello bro");

})