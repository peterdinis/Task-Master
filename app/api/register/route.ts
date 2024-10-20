import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { registerSchema } from "@/app/_schemas/authSchema";


const registerRoute = new Hono().post(
  "/register",
  zValidator(
    "json",
   registerSchema
  ),
  (c) => {
    return c.json({
      hello: "world",
    });
  }
);

export default registerRoute;
