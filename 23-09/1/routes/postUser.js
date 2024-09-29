const express = require(`express`)
const rauter = express.Router()
const user = require(`../data/users`)
const { v4: uuidv4 } = require(`uuid`)

rauter.post(`/`, (req, res) => {
    const { password, email } = req.body;
    user.push({ password, email, id: uuidv4() })
    res.json(user.find(user => user.id === parseInt(req.params.id)))
})
module.exports = rauter;