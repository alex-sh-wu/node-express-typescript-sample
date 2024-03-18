import { Request, Response } from "express";

interface User {
    id: number
    name: string
}

class UserController {
    getAllUsersService : () => Promise<User[]>;
    getNameService : (id : number) => Promise<string>;

    constructor(getAllUsersService : () => Promise<User[]>, getNameService : (id : number) => Promise<string>) {
        this.getAllUsersService = getAllUsersService;
        this.getNameService = getNameService;
    }

    async getUsers(req : Request, res : Response) {
        const users = await this.getAllUsersService();
        res.status(200).json({
            users
        });
    }

    async getUsername(req : Request, res : Response) {
        const userId = parseInt(req.params['userId']);
        if (!Number.isInteger(userId)) {
            res.status(400).json({
                error: "userId must be a number"
            });
        }
        try {
            const name = await this.getNameService(userId);
            res.status(200).json({
                name
            });
        } catch (e) {
            res.status(400).json({
                error: `Could not find a user with the id ${userId}`
            });
        }
    }
}

export default UserController;
