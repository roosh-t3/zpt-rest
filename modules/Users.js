import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import {apiResponse} from '../utilities';
import shortId from 'shortid'

const adapter = new FileAsync('db.json');


export default async (server) => {

    try {
        const db = await low(adapter);
        server.get("/users", async (req, res, next) => {
            try {
                const users = await db.get('users')
                    .value();

                apiResponse(res, users, 200, true);

            } catch (e) {
                apiResponse(res, "Something went wrong", 400, true);
            }
            return next();
        });

        server.get("/users/:name", async (req, res, next) => {
            try {
                const user = {id: shortId.generate(), username: req.params.name};
                await db.get('users')
                    .push(user)
                    .write();

                apiResponse(res, user, 200, true);

            } catch (e) {
                apiResponse(res, e, 400, false);
            }
            return next();
        });

        server.get("/users/:id/delete", async (req, res, next) => {
            try {
                const user = await db.get('users')
                    .remove({id: req.params.id})
                    .write();

                apiResponse(res, user, 200, true);

            } catch (e) {
                apiResponse(res, e, 400, false);
            }
            return next();
        });

    } catch (e) {
        console.log(e);
    }
}