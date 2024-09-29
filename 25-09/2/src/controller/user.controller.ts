import Express, { Application, Request, Response } from "express";
import { addUserToDb, getUserByIdFromDb } from "../dal/user.dal";
import { User } from "../model/user.model";

export async function getUsersById(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id
    const user = await getUserByIdFromDb(id)
    res.status(200).json(user)
}

export async function postUser(req: Request, res: Response): Promise<void> {
    const id: string | undefined = await addUserToDb(req.body)
    res.status(201).json(id)
    return
}