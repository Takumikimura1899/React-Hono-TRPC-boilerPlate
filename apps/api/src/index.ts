import { serve } from "@hono/node-server";
import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { appRouter } from "./trpc/router";

const app = new Hono();

app.use(
	"/trpc/*",
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	}),
);

app.use(
	"/trpc/*",
	trpcServer({
		router: appRouter,
	}),
);

const port = 8000;
console.log(`✅ Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
