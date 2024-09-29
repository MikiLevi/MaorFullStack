"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserToDb = addUserToDb;
exports.getUserByIdFromDb = getUserByIdFromDb;
const jsonfile_1 = __importDefault(require("jsonfile"));
const user_utils_1 = require("../utils/user.utils");
const FILE_NAME = "./src/dal/getUser.dal.json";
function addUserToDb(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userName, password } = userData;
        try {
            let users = [];
            try {
                users = yield jsonfile_1.default.readFile(FILE_NAME);
            }
            catch (err) {
                // אם הקובץ לא קיים עדיין, נתחיל עם מערך ריק
                if (err.code === "ENOENT") {
                    console.log("File not found, creating a new one.");
                }
                else {
                    throw err;
                }
            }
            // הוסף את המשתמש החדש לרשימה הקיימת
            const newUser = yield (0, user_utils_1.createNewUser)(userName, password);
            users.push(newUser);
            // כתוב את כל הנתונים חזרה לקובץ
            yield jsonfile_1.default.writeFile(FILE_NAME, users, { spaces: 2 });
            console.log("New user added successfully!");
            if (newUser.id != undefined) {
                throw new Error("");
            }
            else {
                return;
            }
            return newUser.id;
        }
        catch (err) {
            console.error("Error writing to file:", err);
        }
    });
}
function getUserByIdFromDb(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield jsonfile_1.default.readFile(FILE_NAME);
            const user = users.find((u) => u.id === id);
            if (user) {
                console.log(user);
                return user;
            }
            else {
                throw new Error(`User with id ${id} not found.`);
            }
        }
        catch (err) {
            console.error("Error reading file:", err);
            throw err;
        }
    });
}
// addUserToDb({
//     userName: "ajdcbh",
//     password: "1234"
// })
