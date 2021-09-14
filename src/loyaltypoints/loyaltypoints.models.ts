import { Schema, Types, model } from 'mongoose';

export interface ILoyaltyPoints{
    id_user:Types.ObjectId;
    title:string;
    points:number;

}

const LoyaltyPointsSchema = new Schema<ILoyaltyPoints>({
    id_user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title:{
        type: String,
        required: true
    },
    points:{
        type: Number,
        required: true,
    }
});

export const LoyaltyPointsModel = model<ILoyaltyPoints>('LoyaltyPoints', LoyaltyPointsSchema);