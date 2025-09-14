import { Elysia }   from 'elysia'
import { authModel } from './model'

export const auth = new Elysia()

    .post("/login", async ({ body }) => {

    }, {
        body: authModel.loginBody
    })

    .post("/register", async ({ body }) => {

    }, {
        body: authModel.registerBody
    })

 