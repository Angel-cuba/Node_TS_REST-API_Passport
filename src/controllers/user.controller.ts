import { Request, Response } from "express";
import User, { IUser } from "../models/User";

export const signUp = (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save((err, user: IUser) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({
      ok: true,
      user
    });
  });
}

export const signIn = (req: Request, res: Response) => {
  const { email, password } = req.body;
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
