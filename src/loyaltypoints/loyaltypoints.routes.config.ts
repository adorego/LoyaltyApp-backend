import { CommonRoutesConfig } from "../common/common.routes.config";
import { LoyaltyPointsController } from "./loyaltypoints.controller";
import express from "express";

export class LoyaltyPointsRoutes extends CommonRoutesConfig{
    
    constructor(app: express.Application) {
        super(app, 'LoyaltyPointsRoutes');
        this.configureRoutes();
    }
    configureRoutes(): express.Application {
        this.app.route(`/loyaltypoints`)
        .get((req: express.Request, res: express.Response) => {
            new LoyaltyPointsController().getLoyaltyPoints(req, res);
        })
        .post((req: express.Request, res: express.Response) => {
            new LoyaltyPointsController().createLoyaltyPoints(req, res);
        })

        return this.app;
    }
    
}