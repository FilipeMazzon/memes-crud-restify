const {Router} = require('restify-router');
const authRouter = new Router();

const {
    login
} = require('./auth.controller');

authRouter.post('/auth/login', login);

module.exports = authRouter;
