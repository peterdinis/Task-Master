import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import loginRoute from '../login/route';
import registerRoute from '../register/route';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
	return c.json({
		message: 'Hello Next.js!',
	});
});

const routes = 
	app.route("/auth/login", loginRoute)
	.route("/auth/register", registerRoute)


export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
