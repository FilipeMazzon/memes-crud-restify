(async () => {
    const restify = require('restify');

    //connect with db.
    require('./database/mongodb');

    // import routes
    const authRouter = require('./components/auth/auth.router');
    const memeRouter = require('./components/meme/meme.routes');
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

    const PORT = process.env.PORT || 3000;
    try {
        await server.listen(PORT);
        console.log(`listen on server :${PORT}`)
    } catch (e) {
        console.error("cant start the server")
    }
})();
