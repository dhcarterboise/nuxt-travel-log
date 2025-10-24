import { auth } from "~/lib/auth";

export default defineEventHandler((event) => {
	try {
		return auth.handler(toWebRequest(event));
	}
	catch (err) {
		// log the real cause to the server console
		console.error("Better Auth handler error:", err);
		// surface a minimal error to the client
		event.node.res.statusCode = 500;
		return { error: "Auth error" };
	}
});
