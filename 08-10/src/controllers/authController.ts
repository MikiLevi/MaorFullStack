import { NextFunction, Request, Response } from "express";
import User from '../models/User';
import { generateToken } from '../utils/auth';
import { createUser } from '../servicees/userService'

// פונקציה ליצירת משתמש חדש
export const register = async (req: Request, res: Response) => {
    const { username, password, role, salary, yearsOfExperiens, startDate, age, departmentId } = req.body;
    try {
        const user = await createUser({
            username, password, role, salary, yearsOfExperiens, startDate, age
        }, departmentId);

        // בדיקה האם המשתמש הוא מנהל אם וכן הוא מייצר לו טוקן
        if (user.role === "manager") {
            const token = generateToken(user.id, user.role);
            res.status(200).json({ message: "נרשמת בהצלחה כבוד המנהל" })
        } else {
            res.status(201).json({ message: "נרשמת אבל מה לעשות אתה עדיין לא מנהל", })
        }
    } catch (error) {
        res.status(400).json({ message: "יש תקלה בהרשמה!!!" })
        console.log(error);

    }
}

// התחברות של משתמש קיים 
export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username });
   

    if (!user || (await user.comperePassword(user.password))) {
        return res.status(401).json({ message: "שם משתמש או סיסמה שגויים" })
    };

    // עדכון מתי נכנס
    user.lastLogin = new Date();
    await user.save();

    // בדיקה האם הוא מנהל 
    const token = generateToken(user.id, user.role);
    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600000
    })
    res.status(201).json({ message: "נרשמת בהצלחה כבוד המנהל", token })
}