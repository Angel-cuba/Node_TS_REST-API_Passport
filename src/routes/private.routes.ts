import {Router} from 'express';
const router = Router()
import passport from 'passport';


router.get('/private', passport.authenticate('jwt', {session: false}), async (req, res) => {
    res.json('You are logged in!')
    })

export default router;