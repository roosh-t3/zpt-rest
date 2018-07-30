import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import {apiResponse} from '../utilities';
import shortId from 'shortid'

const adapter = new FileAsync('db.json');


export default async (server) => {

    try {
        const db = await low(adapter);
        server.post("/messages", async (req, res, next) => {
            try {
                const users = await db.get('users')
                    .find({logged: true})
                    .value();

                apiResponse(res, users, 200, true);

            } catch (e) {
                apiResponse(res, "Something went wrong", 400, true);
            }
            return next();
        });
    } catch (e) {
        console.log(e);
    }
}