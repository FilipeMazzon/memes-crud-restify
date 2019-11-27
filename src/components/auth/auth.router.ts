import { Router } from 'restify-router';

import { login } from './auth.controller';

const authRouter = new Router();

authRouter.post('/auth/login', login);

export default authRouter;
