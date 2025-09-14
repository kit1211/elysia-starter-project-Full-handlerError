import { Elysia } from 'elysia'
import { AuthGuard } from '@/middleware/authGuard'
import { AdminOnly } from '@/middleware/adminOnly'

export const task = new Elysia()
    
    .use(AuthGuard)
    .use(AdminOnly)

    .get("/", async ({ decode }) => {
        return {
            msg: "task get",
            decode,
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
