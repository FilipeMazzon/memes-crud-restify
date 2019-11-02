const {Router} = require('restify-router');
const memeRouter = new Router();

const errorRouter = require('../middlewares/error');
memeRouter.use(errorRouter.error404);

module.exports = memeRouter;
