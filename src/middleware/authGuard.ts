import { Elysia } from "elysia";

export const AuthGuard = (app: Elysia) => app
    .derive(({ headers, set } : { headers : any, set : any}) => {
        const raw = headers.authorization
        const token = raw.replace(/^bearer\s+/i, "");
        const user = {
            token,
            username: "test",
            role: "ADMIN",
            hhh:"vvv"
        }
        
        return {
            user
        }
       
    })
