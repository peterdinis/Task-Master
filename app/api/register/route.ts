import { Hono } from "hono";

const app = new Hono().post("/register", (c) => {
    return c.json({
        hello: "world"
    })
})

export default app;