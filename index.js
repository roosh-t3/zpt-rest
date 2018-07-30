/*
|--------------------------------------------------------------------------
| ES6
|--------------------------------------------------------------------------
|
| @author : Rooshan Akthar
|
*/
import './env';
import restify from 'restify';
import Users from './modules/users';
import * as admin from 'firebase-admin';
import {googleDetails} from "./utilities";
import corsMiddleware from 'restify-cors-middleware'


admin.initializeApp({
    credential: admin.credential.cert(googleDetails),
});


let server = restify.createServer();


const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ['*'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']
})

server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.bodyParser({ mapParams: false }));
Users(server);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});