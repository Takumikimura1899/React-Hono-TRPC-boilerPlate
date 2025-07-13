import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { httpBatchLink } from "@trpc/client";

import { trpc } from "./lib/trpc";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			url: "http://localhost:8000/trpc",
		}),
	],
});

const root = document.getElementById("root");
if (!root) {
	throw new Error("Root element not found");
}

createRoot(root).render(
	<StrictMode>
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</trpc.Provider>
	</StrictMode>,
);
