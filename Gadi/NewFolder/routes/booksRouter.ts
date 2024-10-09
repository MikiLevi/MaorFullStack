import express, { Router, Request, Response, NextFunction } from "express";
import authMiddleware from "../middlewars/authMiddleware.js";

const router: Router = express.Router();

const books: string[] = ["book1", "book2", "book3"]

// @Public routes
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ data: books })
})
router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ data: books[+req.params.id] })
})

// @Protected route
// if you want to make a section that is protected you do this:
// router.use(authMiddleware) 

router.post("/",authMiddleware ,(req: Request, res: Response, next: NextFunction) => {
    books.push(req.body.book)
    res.status(201).json({ message: "book was added" })
})

export default router;

