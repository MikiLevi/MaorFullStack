import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const authMiddleware = (req, res, next) => {
    if (!process.env.JWT_SECRET) {
        res.status(500).json({ message: "Something went wrong!" });
        return;
    }
    const JWT_SECRET = process.env.JWT_SECRET;
    const authHeader = req.headers["authorization"] ||
        req.headers["Authorization"];
    if (!authHeader) {
        res.status(401).json({ message: "Access token is missing!" });
        return;
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};
export default authMiddleware;
