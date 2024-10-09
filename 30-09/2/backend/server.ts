import express from 'express';
import http from "http";
import { Server, Socket } from 'socket.io';


const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

interface User {
    id: string;
    name: string;
    room: string;
}

const users: User[] = [];

// התחברות לאפליקציה
io.on('connection', (socket: Socket) => {
    console.log("המשתמש התחבר בהצלחה");

    // מייצר משתמש לפי השם פרטי ושם החדר 
    socket.on('join', ({ name, room }: { name: string, room: string }) => {
        const user: User = { id: socket.id, name, room }

        users.push(user)
        // מייצר חדר חדש
        socket.join(user.room)
        // לשלוח הודעת מערכת כאשר משתתמש צורף בהצלחה
        socket.emit("message"), { user: 'מערכת', text: `${user.name}, ברוך הבא: ${user.room}` }
        // שולח הודעה לחדר ספציפי ולכמה אנשים
        socket.broadcast.to(user.room).emit('messege', { user: "מערכת", text: `${user.name} הצטרף לחדר:` })

        // לפטר משתמש לפי החדר שלו
        io.to(user.room).emit('roomData', { room: user.room, users: users.filter(u => u.room === user.room) })

        // מראה שמשתמש מקליד 
        socket.on("typing...", (isTyping: boolean) => {
            const user = users.find(u => u.id === socket.id)
            if (user) {
                socket.broadcast.to(user.room).emit("typing...", { user: user.name, isTyping })
            }
        });
        // 
        socket.on('disconnct', () => {
            const index = users.findIndex(user => user.id === socket.id)
            if (index !== -1) {
                const user = users.splice(index, 1)[0]
                // מציג הודעה שהמשתמש עזב
                io.to(user.room).emit('messege', { user: "מערכת", text: `${user.name} עזב את החדר` });

                io.to(user.room).emit('roomData', {room: user.room, users:users.filter(u => u.room)})
            }
        })

        const PORT = 3000
        app.listen(PORT, () =>{
            console.log("Listen to port");
        })

        // מה קורה כשמשתמש עוזב את החדר

    })
})
