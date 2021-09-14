import { Schema, model } from "mongoose";

export interface ICompany{
    name: string;
    ruc: string;
    address: string;

}

const CompanySchema = new Schema<ICompany>({
    name:{
        type: String,
        required: true
    },
    ruc:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});

export const CompanyModel = model<ICompany>('Company', CompanySchema);