import { Schema, Types, model } from "mongoose";

export interface ILoyaltyRewards{
    id_company: Types.ObjectId;
    title:string;
    description:string;
    points_cost: number;
    cost_description:string;
    image:string;
    answer_on_select:string;

}

const LoyaltyRewardsSchema = new Schema<ILoyaltyRewards>({
    id_company:{
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    points_cost:{
        type: Number,
        required: true
    },
    cost_description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    answer_on_select:{
        type: String,
        required: true

    }


});

export const LoyaltyRewardsModel = model<ILoyaltyRewards>('LoyaltyRewards', LoyaltyRewardsSchema)