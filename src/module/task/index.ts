import { Elysia } from 'elysia'
import { AuthGuard } from '@/middleware/authGuard'


export const task = new Elysia()
    
    .use(AuthGuard)

    .get("/", async ({ user }) => {
        const {role, username, token } = user
        return {
            msg: "task get",
            role,
            username,
            token
        }
    }, {
        
    })

    .post("/", async ({ body }) => {

    }, {
    })

    .put("/:id", async ({ params, body }) => {

    }, {
    })

    .delete("/:id", async ({ params, body }) => {

    }, {
    })
