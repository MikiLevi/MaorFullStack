const express = require(`express`)
const rauter = express.Router()
const users = require(`../data/users`)

rauter.get(`/`, (req, res) => {
    res.json(users)
})
module.exports = rauter;