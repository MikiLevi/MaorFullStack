import jsonfile from "jsonfile";
import { createNewUser } from "../utils/user.utils"
import { User } from "../model/user.model";

const FILE_NAME = "./src/dal/getUser.dal.json";

export async function addUserToDb(userData: User): Promise<string | undefined> {
    const { userName, password } = userData;
    try {
        let users: User[] | any = [];
        try {
            users = await jsonfile.readFile(FILE_NAME);
        } catch (err: NodeJS.ErrnoException | any) {
            // אם הקובץ לא קיים עדיין, נתחיל עם מערך ריק
            if (err.code === "ENOENT") {
                console.log("File not found, creating a new one.");
            } else {
                throw err;
            }
        }

        // הוסף את המשתמש החדש לרשימה הקיימת
        const newUser = await createNewUser(userName, password);
        users.push(newUser);
        // כתוב את כל הנתונים חזרה לקובץ
        await jsonfile.writeFile(FILE_NAME, users, { spaces: 2 });
        console.log("New user added successfully!");
        if (newUser.id != undefined) {
            throw new Error("");
        } else {
            return
        }
    } catch (err) {
        console.error("Error writing to file:", err);
    }
}
export async function getUserByIdFromDb(id: string): Promise<User> {
    try {
        const users: User[] | any = await jsonfile.readFile(FILE_NAME);
        const user = users.find((u: User) => u.id === id);
        if (user) {
            console.log(user);
            return user;
        } else {
            throw new Error(`User with id ${id} not found.`);
        }
    } catch (err) {
        console.error("Error reading file:", err);
        throw err;
    }
}



