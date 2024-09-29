const { log } = require("console");
const fs = require("fs");
const { reverse } = require("lodash");
const { join } = require("path");
fs.writeFile("data.txt", "Hello, this is a random text file.It contains a bunch of random sentences, like this one about a happy kangaroo jumping over a rainbow. Another random sentence might tell you about the time a robot decided to take a day off and go to the beach. The robot didn't get a tan, of course, because robots are made of metal. In any case, this is a very random text file. I hope you find it entertaining, or at least slightly amusing. Goodbye for now!", (err) => {
    if (err) {
        return console.log(err);
    }; console.log("file create/updeted");
})

fs.readFile("data.txt", (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(data.toString());
    console.log(data.toString().split(" ").length);
    console.log(reverse(data.toString()));
})

