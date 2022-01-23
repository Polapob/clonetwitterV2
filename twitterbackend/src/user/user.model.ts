import { Schema } from 'mongoose';
export const UserSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  createAt: { type: Date, required: true },
  updateAt: { type: Date, required: true },
  dayBirth: { type: Date },
  email: { type: String, required: true },
  profileURL: { type: String },
  password: { type: String },
  userType: { type: String, required: true },
});
export class User {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public createAt: Date,
    public updateAt: Date,
    public email: string,
    public profileURL: string,
    public password: string,
    public dayBirth: Date,
    public userType: string,
  ) {}
}
