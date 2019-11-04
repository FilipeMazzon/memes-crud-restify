# Memes CRUD

## Topics
+ [General info](#summary)
+ [Technologies](#technologies)
+ [Setup](#setup)
+ [Contact](#contact)
+ [License](#license)

## Summary
This a memes crud micro-service which is connect with a auth service to get they token

This project implements the routes:
- /auth/login
- create, update, delete, find and findById a meme in MongoDB.
	
## Technologies
Project is created with:
* [Node.js](https://nodejs.org/pt-br/): 12.13.0 its a runtime of javascript, to execute js in the server.
* [Mongoose](https://mongoosejs.com/): 5.7.7 It`s a ODM for mongodb.
* [Axios](https://www.npmjs.com/package/axios): 0.19.0 It`s to make a http requests to another APIs.
* [Restify](http://restify.com/): 8.4.0 its a framework to handle of request-response.
* [Restify-Router](https://www.npmjs.com/package/restify-router): 0.5.1 organize better the routes of our application

## Technologies of development
* [typescript](https://www.typescriptlang.org/): 3.6.4 its a superset of javascript ( principal use is to make js typed)
* [@type-node](https://www.npmjs.com/package/@types/node): 12.12.5 use modules of nodejs with typescript
* [ts-node](https://www.npmjs.com/package/ts-node): 8.4.1 its for run typescript in server without compile.
* [ts-watch](https://www.npmjs.com/package/tsc-watch): 4.0.0 its like a nodemon, re-run when something change
* [prettier](https://prettier.io/): 1.18.2 make code prettier
* [tslint](https://palantir.github.io/tslint/): 5.20.0 its for make a typescript code more lean
* [tslint-config-prettier](https://github.com/prettier/tslint-config-prettier) : 1.18.0 it's to work with tslint and prettier simultaneous.

## Setup
To run this project, install it locally using npm:
```shell script
$ git clone git@github.com:FilipeMazzon/memes-crud-restify.git
$ cd memes-crud-restify/
$ npm install
$ npm start
```
> [!NOTE]
> if not install ts-node in npm install please use npm i -g ts-node

## Setup to production
```shell script
$ git clone git@github.com:FilipeMazzon/memes-crud-restify.git
$ cd memes-crud-restify/
$ npm install
$ npm run build
$ npm run start:prod
```
or if you have typescript compiler install globally

```shell script
$ git clone git@github.com:FilipeMazzon/memes-crud-restify.git
$ cd memes-crud-restify/
$ npm install --only=prod
$ npm run build
$ npm run start:prod
```


### Contact
- [Filipe Mazzon Ribeiro](mailto:filipemazzon@gec.inatel.br)
- [Matheus Henrique da Silva](mailto:matheushenriquesilva@gec.inatel.br)

### License

[MIT](https://github.com/FilipeMazzon/memes-crud-restify/blob/master/LICENSE)
