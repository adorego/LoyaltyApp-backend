import {Schema, model} from 'mongoose';

export interface IUser{
    name:string;
    lastName:string;
    email:string;
}

const UserShema = new Schema<IUser>({
    email: {
      type:String, 
      required: true,
      match: /.+@.+\..+/,
      unique: true

    },
    name: {type:String, required: true},
    lastName: {type:String, required: true}

});

export const UserModel = model<IUser>('User', UserShema);

