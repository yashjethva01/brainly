import {Model, Schema} from "mongoose";

const UserSchema = new Schema({
    usernamne: {type: string, unique: true},
    password: string
})

export const UserModel = new Model(UserSchema, "User");  