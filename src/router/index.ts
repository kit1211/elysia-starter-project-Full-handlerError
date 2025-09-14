import { Elysia } from "elysia";
import { auth } from "@/module/auth";
import { user } from "@/module/user";
import { task } from "@/module/task";



export const router = new Elysia()

    .group('/auth', (app) => app
        .use(auth) 
    )
    .group('/user', (app) => app.use(user) )
    .group('/task', (app) => app.use(task) )