import { Request, Response } from "express";
import User, { IUser } from "../models/User";

export const signUp = async(req: Request, res: Response):Promise<Response> => {
  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({
      ok: false,
      msg: 'Email and password are required'
    })
  }
  const userExist = await User.findOne({ email: req.body.email})
  if(userExist) {
    return res.status(400).json({
      msg: 'User already exists'
    })
  }
  const user = new User({email, password});
  await user.save();
  return res.status(200).json(user)
  // user.save((err, user: IUser) => {
  //   if (err) {
  //     return res.status(400).json({
  //       ok: false,
  //       err
  //     });
  //   }
  //   res.json({
  //     ok: true,
  //     user
  //   });
  // });
}

export const signIn = (req: Request, res: Response) => {
  res.json('signIn');
  // const { email, password } = req.body;
  // User.findOne({ email }, (err, user: IUser) => {
  //   if (err) {
  //     return res.status(500).json({
  //       ok: false,
  //       err
  //     });
  //   }
  //   if (!user) {
  //     return res.status(400).json({
  //       ok: false,
  //       err: {
  //         message: "Usuario o contraseña incorrectos"
  //       }
  //     });
  //   }
  //   // user.comparePassword(password, (err, isMatch) => {
  //   //   if (err) {
  //   //     return res.status(500).json({
  //   //       ok: false,
  //   //       err
  //   //     });
  //   //   }
  //   //   if (!isMatch) {
  //   //     return res.status(400).json({
  //   //       ok: false,
  //   //       err: {
  //   //         message: "Usuario o contraseña incorrectos"
  //   //       }
  //   //     });
  //   //   }
  //   //   user.generateToken((err, user) => {
  //   //     if (err) {
  //   //       return res.status(400).json({
  //   //         ok: false,
  //   //         err
  //   //       });
  //   //     }
  //   //     res.json({
  //   //       ok: true,
  //   //       user
  //   //     });
  //   //   });
  //   // });
  // });
}
