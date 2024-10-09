import { User } from "../models/User.js"
import jsonfile from "jsonfile"

const FILE = "./users.json";

export const getUsers = async (): Promise<User[]> => await jsonfile.readFile(FILE);

export const saveUsers = async (users: User[]): Promise<void> =>
    await jsonfile.writeFile(FILE, users);