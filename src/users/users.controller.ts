import {IUser, UserModel} from './users.models';

import debug from 'debug';
import express from "express";

export class UsersController{
    
    debuglog: debug.IDebugger;
    

    constructor(){
        this.debuglog = debug('app');

    }
    public createUser(req: express.Request, res: express.Response):void{
        

        if(!req.body.email || !req.body.name || !req.body.lastName){
            res
                .status(400)
                .json({"message":"No se enviaron todos los parametros"});
        }
        
        const User:IUser = req.body;

        console.log('User to save:', User);
        
        UserModel.create(User, (err, userSaved) => {
            if(err){ 
                console.log('Entro en err:', err);
                res
                        .status(400)
                        .json({"message":"Ha ocurrido un error:"+err});
            }
            else{
                console.log('Entro en ok:', userSaved);
                res
                    .status(201)
                    .json(userSaved);
            }
        })
        
        
                
    }
}