const express = require(`express`);
const app = express();

app.get(`/`, (req, res) => {
    res.send(`send secssefuly`)
})

const {rounteInit} = require(`./routes/config_routes`);
rounteInit(app);

let port = process.env.PORT || "3300";
app.listen(port, () => {
    console.log(`listen to http://localhost:${port}`);
});
