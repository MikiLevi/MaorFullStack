import express from 'express';
import http from 'http'
import { Server } from 'socket.io'

const app = express();
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4000",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("User is con...");

    socket.on('draw', (data) => {
        socket.broadcast.emit("draw", data);
    });

    socket.on("disconnect", () => {
        console.log("User");
    })

    const PORT = 3000;

    server.listen(PORT, () => {
        console.log("Mikiiiiiiiii");
    })

})