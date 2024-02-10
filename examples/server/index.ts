import helloName from "./routes/hello-name";
import helloWorld from "./routes/hello-world";

Bun.serve({
	port: 8080,
	fetch: async (req) => {
		const url = new URL(req.url);
		switch (url.pathname) {
			case "/hello-world":
				if (req.method === "GET") {
					return await helloWorld(req);
				}
			case "/hello-name":
				if (req.method === "GET") {
					return await helloName(req);
				}
			default:
				return new Response("Not found", { status: 404 });
		}
	},
});
