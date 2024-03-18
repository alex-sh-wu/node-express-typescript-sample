import express, { Request, Response } from "express";
import { UserController } from "../controllers";
import { getAllUsers, getName } from "../services";

const userController = new UserController(getAllUsers, getName);

const userRouter = express.Router();
userRouter.get('/', (req : Request, res : Response) => userController.getUsers(req, res));
userRouter.get('/name/:userId', (req : Request, res : Response) => userController.getUsername(req, res));

export {
    userRouter
};
