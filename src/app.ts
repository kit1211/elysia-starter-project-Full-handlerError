import { Elysia } from "elysia";
import { router } from "./router";
import { onError } from "./middleware/onError";


const app = new Elysia()
  .use(onError)
  .use(router)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
