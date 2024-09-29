const express = require(`express`);
const users = require("../data/users");
const rauter = express.Router();

rauter.delete(`/api/delete/:id`, (req, res) => {
    res.json(users.finf(users => users.id === parseInt(req.params.id)))
});

module.exports = rauter;