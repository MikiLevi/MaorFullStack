import express from 'express';
import { getUsers, deleteUserById, getStatistics, getUseeBySalaryRange } from '../controllers/userController';
import { authMiddleware, managerAuthMiddleware } from '../middleware/authMiddeware';;
import { errorHandler } from '../utils/erorrHandler';
import { create } from 'domain';

const router = express.Router();

/**
 * @swagger
 * /users:
 *  get:
 *    summary: (Accept all users)
 *    description: תחזיר רשימה של כל המשתמשים. זמין רק למנהלים
 *    security:
 *      -cookieAuth: []
 *    responses:
 *      200:
 *         description: רשימת משתמשים הוחזרה בהצלחה
 *      401:
 *         description: לא מורשה, נדרשת התחברות
 *      403: 
 *         description: נדרשת הרשאת מנהל
 */
router.get("/", authMiddleware, managerAuthMiddleware, errorHandler(getUsers));

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    summary: (Delete user by id)
 *    description: only managers can delete users
 *    security:
 *      -cookieAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *         description: רשימת משתמשים הוחזרה בהצלחה
 *      401:
 *         description: לא מורשה, נדרשת התחברות
 *      403: 
 *         description: נדרשת הרשאת מנהל
 */
router.delete("/:id", authMiddleware, managerAuthMiddleware, errorHandler(deleteUserById))
router.get('/statistics', authMiddleware, managerAuthMiddleware, getStatistics)

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    summary: (Show by Price Range )
 *    description: תחזיר רשימה של עובדים לפי טווח מסויים של שכר
 *    security:
 *      -cookieAuth: []
 *    responses:
 *      200:
 *         description: רשימת משתמשים הוחזרה בהצלחה
 *      401:
 *         description: לא מורשה, נדרשת התחברות
 *      403: 
 *         description: נדרשת הרשאת מנהל
 */
router.get('/:minSalary/:maxSalary', authMiddleware, managerAuthMiddleware, errorHandler(getUseeBySalaryRange))

/**
 * @swagger
 * /auth/register:
 *  post:
 *    summary: (Register new user)
 *    description: Every user can register
 *    security:
 *      - cookieAuth: []
 *    requestBody: 
 *      content:  
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              role:
 *                type: enum
 *                enum: ['employee', 'manager']
 *              salary:
 *                type: number
 *              yearsOfExperience:
 *                type: number
 *              startDate:
 *                type: date
 *              age:
 *                type: number
 *            example:
 *              username: johnDoe
 *              password: some password 
 *              role: manager
 *              salary: 1000
 *              yearsOfExperience: 5
 *              startDate: 2022-01-01
 *              age: 30
 *    responses:
 *      200:
 *        description: Users list returned successfully
 *      401:
 *        description: Unauthorized
 *      503:
 *        description: Service is temporarily unavailable
 */
// router.post('/', authMiddleware, managerAuthMiddleware, errorHandler(createUser))


export default router;