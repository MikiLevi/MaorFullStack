import { Request, Response } from "express";
import * as userService from '../servicees/userService'

// פונקציה להבאת יוזר אחד
export const getOneUser = async (req: Request, res: Response) => {
    const user = await userService.getUserbyId(req.params.id);

    if (!user) {
        res.status(404).json({ message: "User not found" })
    }

    res.json(user)
};

// פונקציה להבאת כל היוזרים
export const getUsers = async (req: Request, res: Response) => {
    const users = await userService.getAllUsers()

    res.json(users)
};

// מעדכן את המשתמשים
export const updateuserById = async (req: Request, res: Response) => {
    const user = await userService.updateuser(req.params.id, req.body)

    if (!user) {
        res.status(404).json({ message: "User not found" })
    }

    res.json(user)
};

// מחיקת משתמש לפי id
export const deleteUserById = async (req: Request, res: Response) => {
    const user = await userService.deleteUser(req.params.id)

    if (!user) {
        res.status(404).json({ message: "User delete" })
    }

    res.json(user)
};

// הבאת משתמש לפי סטטיסטיקה
export const getStatistics = async (req: Request, res: Response) => {
    const Statistics = await userService.getUserStatistics();

    res.json(Statistics);
};

// פונקציה להצגת משתמשים לפי טווח משכורת
export const getUseeBySalaryRange = async (req: Request, res: Response) => {
    const { minSalary, maxSalary } = req.params;
    const users = await userService.getUseeBySalaryRange(Number(minSalary), Number(maxSalary));

    res.json(users);
}