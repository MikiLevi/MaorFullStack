import { validationResult } from "express-validator";
import { v1 as uuid1 } from "uuid";
import bcrpyt from "bcrypt"


export const signUp = async (req, res) => {
    console.log(req.body);
    const result = validationResult(res)
    if (result.isEmpty()) {
        res.status(400).json({ error: result.array() });
        return
    }
    const user = req.body
    user.id = uuid1()
    user.password = await bcrpyt.hash(user.password, 9)
    console.log("Add user" + user);
    addUser(user, () => {
        res.status(200).json(user)
    })
}


