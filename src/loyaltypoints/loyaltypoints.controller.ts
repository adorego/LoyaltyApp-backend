import { ILoyaltyPoints, LoyaltyPointsModel } from "./loyaltypoints.models";

import express from "express";

export class LoyaltyPointsController{
    
    public createLoyaltyPoints(req: express.Request, res: express.Response):void{
        if(!req.body.id_user){
            res
                .status(400)
                .json({"message":"No se enviaron todos los parametros"});
        
        }

        const LoyaltyPoints:ILoyaltyPoints = req.body;

        LoyaltyPointsModel.create(LoyaltyPoints, (err, LoyaltyPointsSaved) => {
            if(err){ 
                console.log('Entro en err:', err);
                res
                        .status(400)
                        .json({"message":"Ha ocurrido un error:"+err});
            }
            else{
                console.log('Entro en ok:', LoyaltyPointsSaved);
                res
                    .status(201)
                    .json(LoyaltyPointsSaved);
            }
        })
    }

    public getLoyaltyPoints(req: express.Request, res: express.Response):void{
        if(!req.body.id_user){
            res
                .status(400)
                .json({"message":"No se enviaron todos los parametros"});
        
        }

        LoyaltyPointsModel
                        .find({id_user:req.body.id_user})
                        .exec((err, loyaltypoints) => {
                            if(!loyaltypoints){
                                return res
                                .status(404)
                                .json({
                                    "message": "No se encontraron los LoyaltyPoints"
                                });
                            }else if (err){
                                return res
                                .status(404)
                                .json(err);
                            }
                            
                            res.status(200).json(loyaltypoints);
                        });
    }

}