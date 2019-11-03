import * as  restify from 'restify';
//connect with db.
import './database/mongodb';

// import routes
import authRouter from './components/auth/auth.router';
import memeRouter from './components/meme/meme.routes';

(async () => {
  const server = restify.createServer();

  //this is a pre middleware which sanitize the route, example: /meme/ will be /meme
  server.pre(restify.pre.sanitizePath());
  // dedupe slashes in URL before routing
  server.pre(restify.plugins.pre.dedupeSlashes());
  //make parsers
  server.use(restify.plugins.bodyParser());

  //apply routes.
  authRouter.applyRoutes(server);
  memeRouter.applyRoutes(server);

  const PORT: number = parseInt(process.env.PORT, 10) || 3000;
  try {
    await server.listen(PORT);
    console.log(`listen on server :${PORT}`);
  } catch (e) {
    console.error('cant start the server');
  }
})();
