import { Request, Response } from "express";
import { createToken } from "../helpers/helper";
import User, { IUser } from "../models/User";

export const signUp = async(req: Request, res: Response):Promise<Response> => {
  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({
      ok: false,
      msg: 'Email and password are required'
    })
  }
  const userExist = await User.findOne({ email })
  if(userExist) {
    return res.status(400).json({
      msg: 'User email already exists'
    })
  }
  const user = new User({email, password});
  await user.save();
  return res.status(200).json(user);
}

export const signIn = async(req: Request, res: Response) => {
    const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({
      ok: false,
      msg: 'Email and password are required'
    })
  }
 const user = await User.findOne({ email});
    if (!user) {
      return res.status(400).json({
        err: {
          message: "Usuario doesn't exist. Plz try again"
        }
      });
    }

const isMatch = await user.comparePassword(password)

  if (!isMatch) {
    return res.status(400).json({
      err: {
        message: "Incorrect password"
      }
    });
  }
  
  return res.status(200).json({
    ok: true,
    token: createToken(user)
  });

}
