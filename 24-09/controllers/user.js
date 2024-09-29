import { getAll } from "../dal.js";

export const getUsers = (req, res) => {
    getAll((users) => {
        res.status(200).json(users)
    })
}

export const getById = (req, res) => {
    const userId = req.params.id
    console.log(userId);
    findById(userId, (user) => {
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json("User not fonud")
        }
    })
}