import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import App from "./App";
import { trpc } from "./lib/trpc";

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
				<App />
			</QueryClientProvider>
		</trpc.Provider>
	</StrictMode>,
);
