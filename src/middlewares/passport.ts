import {Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import key from '../config/key';
import User, { IUser } from '../models/User';

const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: key.PRIVATE_KEY
}

export default new Strategy(options, async (payload, done) => {
 try {
       await User.findById(payload.id, (err:any, user: IUser) => {
        if(err) {
            return done(err, false);
        }
        if(user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
     
 } catch (error) {
     console.log(error);
 }
}
)