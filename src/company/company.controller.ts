import { CompanyModel, ICompany } from './company.models';

import express from "express";

export class CompanyController{
    public createCompany(req: express.Request, res: express.Response):void{
        if(!req.body.name || !req.body.ruc || !req.body.address){
            res
                .status(400)
                .json({"message":"No se enviaron todos los parametros"});
        }

        const Company:ICompany = req.body;

        CompanyModel.create(Company, (err, CompanySaved) => {
            if(err){ 
                console.log('Entro en err:', err);
                res
                        .status(400)
                        .json({"message":"Ha ocurrido un error:"+err});
            }
            else{
                console.log('Entro en ok:', CompanySaved);
                res
                    .status(201)
                    .json(CompanySaved);
            }
        });
    }

    public getCompany(req: express.Request, res: express.Response):void{
        if(!req.body.id_company){
            res
                .status(400)
                .json({"message":"No se enviaron todos los parametros"});
        }
    }
}