import { Elysia } from "elysia";
import { Err } from "@/error";


export const AdminOnly = (app: Elysia) => app
    .onBeforeHandle(( context : any) => {
        const role = context.decode
        if(role !== "ADMIN"){
            throw new Err("Unauthorize Admin zone", 401)
        }
    });