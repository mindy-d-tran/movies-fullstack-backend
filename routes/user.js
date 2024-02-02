import {Router} from 'express';

const router = new Router();

/**
 * POST /signin
 */
router.post('/signin', async (req,res)=>{
    // check if user exist
    // check if pass is a match
    // send the db user 
    const user = {_id: '1', email: 'alex@gmail.com', userName: 'alex123'};
    res.json(user);
});
/**
 * POST /signup
 */
router.post('/signup', async(req,res)=>{
    // check email is not in db
    // create new user in db
    // send the new user
    const user = {_id: '1', email: 'alex@gmail.com', userName: 'alex123'};
    res.json(user);
});

export default router;