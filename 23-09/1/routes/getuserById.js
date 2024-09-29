const express = require(`express`)
const rauter = express.Router()
const user = require(`../data/users`)

rauter.get(`/:id`, (req, res) => {
    res.json(user.find(user => user.id === parseInt(req.params.id)))
})
module.exports = rauter;