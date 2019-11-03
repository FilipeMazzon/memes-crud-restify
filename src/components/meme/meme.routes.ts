import {Router} from 'restify-router';

import {
    createMeme,
    deleteMeme,
    getMemeById,
    getMemes,
    updateMeme
} from './meme.controller';

const memeRouter = new Router();

import * as authMiddleware from '../../middlewares/auth';

memeRouter.use(authMiddleware.verifyToken);

memeRouter.get('/meme', getMemes);
memeRouter.get('/meme/:id', getMemeById);
memeRouter.post('/meme', createMeme);
memeRouter.patch('/meme/:id', updateMeme);
memeRouter.del('/meme', deleteMeme);

export default memeRouter;
