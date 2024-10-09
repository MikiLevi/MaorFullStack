var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as userServices from "../services/userServices.js";
dotenv.config();
// @Route /users/register
// @Method POST
// @Body: { username, password }
// @Returns: { id }
export const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400);
            throw new Error("bad request");
        }
        const newUser = yield userServices.createUser(username, password);
        res.status(201).json({ id: newUser.id });
    }
    catch (error) {
        next(error);
    }
});
// @Route /users/login
// @Method POST
// @Body: { username, password }
// @Returns: { token }
export const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400);
            throw new Error("bad request");
        }
        const user = yield userServices.authenticateUser(username, password);
        if (!user) {
            res.status(401);
            throw new Error("bad request");
        }
        if (!process.env.JWT_SECRET) {
            res.status(500);
            throw new Error("Something went wrong");
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });
        res.status(200).json({ token });
    }
    catch (error) {
        next(error);
    }
});
