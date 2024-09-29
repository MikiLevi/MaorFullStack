const express = require("express")
const app = express()
const userRouter = require("./routes/users")

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    console.log("Hello bro");
    res.render("index", { text: "Good dey" })
})
app.use("/users", userRouter)



app.listen(3000) 