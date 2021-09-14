import { CommonRoutesConfig } from "../common/common.routes.config";
import { CompanyController } from "./company.controller";
import express from "express";

export class CompanyRoutes extends CommonRoutesConfig{
    
    constructor(app: express.Application){
        super(app, 'CompanyRoutes');
        this.configureRoutes();
    }
    configureRoutes(): express.Application {
        this.app.route('/company')
        .post((req: express.Request, res: express.Response) =>{
            new CompanyController().createCompany(req, res);
        });
        
        return this.app;
    }
    
}