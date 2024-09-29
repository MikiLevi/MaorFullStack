const getAll = require(`./getAllUsers`);
const user = require(`./getuserById`);
const del = require(`./delete`);
const userPost = require(`./postUser`);

exports.rounteInit = (app) => {
    app.use(`/getUsers`, getAll);
    app.use(`/getOne`, user);
    app.use(`/delete`, del);
    app.use(`/post`, userPost)
};

