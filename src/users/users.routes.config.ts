import { CommonRoutesConfig } from "../common/common.routes.config";
import { UsersController } from "./users.controller";
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig{
   
    constructor(app: express.Application){
        super(app, 'UsersRoutes');
        this.configureRoutes();
    }

    configureRoutes(): express.Application {
        this.app.route(`/users`)
        .get((req:express.Request, res:express.Response) => {
            res.status(200).send('Lista de usuarios');
        })
        .post((req:express.Request, res:express.Response) => {
            new UsersController().createUser(req, res);
        }

        )

        return this.app;
    }
}