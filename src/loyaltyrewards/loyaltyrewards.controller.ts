import { LoyaltyRewardsModel } from "./loyaltyrewards.models";
import express from "express";

export class LoyaltyRewardsController{

    public getLoyaltyRewards(req: express.Request, res: express.Response):void{
        if(!req.body.id_company){
            res
                .status(400)
                .json({"message":"No se enviaron todos los parametros"});
        }
        LoyaltyRewardsModel
                        .find({id_company:req.body.id_company})
                        .exec((err, LoyaltyRewards) => {
                            if(!LoyaltyRewards){
                                return res
                                .status(404)
                                .json({
                                    "message": "No se encontraron los Loyalty Rewards"
                                });
                            }else if (err){
                                return res
                                .status(404)
                                .json(err);
                            }
                            res.status(200).json(LoyaltyRewards);
                        });
        
    }

    public createLoyaltyReward(req: express.Request, res: express.Response):void{
        if(!req.body.id_company){
            res
                .status(400)
                .json({"message":"No se enviaron todos los parametros"});
        }
        
    }
}