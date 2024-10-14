import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./servicees/database";
import authRoutes from "./routes/authRoutes";
import userRouter from './routes/userRoutes';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';

dotenv.config()

const app = express()
app.use(express.json());
app.use(cookieParser());

const options = {
    failOnErrors: true,
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Employees',
            version: '1.0.0',
        },
        servers: [{
            url: 'https://localhost:3000'
        }]
    },
    apis: ['./src/routes/*.ts'],
};

const openapiSpecification = swaggerJSDoc(options);

app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(openapiSpecification))
app.use('/auth', authRoutes);
app.use('/users', userRouter);


connectToDatabase()

const PORT = process.env.PORT || 33000

app.listen(PORT, () => {
    console.log(`server is raning to port, ${PORT}`);
});