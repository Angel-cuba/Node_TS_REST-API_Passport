import { IUser } from "../models/User";
import jwt from "jsonwebtoken";
import key from '../config/key';


export function createToken(user: IUser){
  return jwt.sign({
    id: user.id,
    email: user.email,
  }, key.PRIVATE_KEY as string, {expiresIn : '1h'})
}