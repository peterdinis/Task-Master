import { loginSchema } from '@/app/_schemas/authSchema';
import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';

const loginRoute = new Hono().post(
	'/',
	zValidator('json', loginSchema),
	async (c) => {
    
    const {email, password} = c.req.valid("json");

		return c.json({ message: 'Login successful' });
	},
);

export default loginRoute;
