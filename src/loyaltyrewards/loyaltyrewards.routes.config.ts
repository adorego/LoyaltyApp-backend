import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class LoyaltyRewardsRoutes extends CommonRoutesConfig{
    
    constructor(app: express.Application) {
        super(app, 'LoyaltyRewardsRoutes');
        this.configureRoutes();
    }
    configureRoutes(): express.Application {
        this.app.route(`/loyaltyrewards`)
        .get((req: express.Request, res: express.Response) => {
            new LoyaltyRewardsController().getLoyaltyRewards(req, res);
        })
        .post((req: express.Request, res: express.Response) => {
            new LoyaltyRewardsController().createLoyaltyReward(req, res);
        })

        return this.app;
    }
    
}