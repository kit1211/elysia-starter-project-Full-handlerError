import { Elysia } from "elysia";
import jwt from "jsonwebtoken"


export const AuthGuard = (app: Elysia) => app
    .derive(({ headers, set }) => {
        const secret = process.env.JWT_SECRET || "passw0rd"
        const token = headers['authorization']?.replace('Bearer ', '');
        // const bearer =  auth?.startsWith('Bearer ')
        const decode = jwt.verify(token as string, secret);

        return {
            decode
        }
       
    })
