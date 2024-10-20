import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema } from "@/app/_schemas/authSchema";

const loginRoute = new Hono().post(
  "/login",
  zValidator(
    "json",
    loginSchema
  ),
  (c) => {
    return c.json({
      hello: "world",
    });
  }
);

export default loginRoute;
