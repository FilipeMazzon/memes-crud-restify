const {Router} = require('restify-router');
const memeRouter = new Router();
const {
    createMeme,
    deleteMeme,
    getMemeById,
    getMemes,
    updateMeme
} = require('./meme.controller');

const authMiddleware = require('../../middlewares/auth');
memeRouter.use(authMiddleware.verifyToken);
memeRouter.get('/meme', getMemes);
memeRouter.get('/meme/:id', getMemeById);
memeRouter.post('/meme', createMeme);
memeRouter.patch('/meme/:id', updateMeme);
memeRouter.del('/meme', deleteMeme);

module.exports = memeRouter;
