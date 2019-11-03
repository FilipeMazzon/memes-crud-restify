import {Router} from 'restify-router';

const authRouter = new Router();

import {
    login
} from './auth.controller';

authRouter.post('/auth/login', login);

export default authRouter;
