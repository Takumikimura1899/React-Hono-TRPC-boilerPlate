import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { trpc } from "@/lib/trpc";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const { data, isLoading, error } = trpc.getPosts.useQuery();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="p-8">
			<h1 className="text-2xl font-bold mb-4">Posts</h1>
			<ul>
				{data?.map((post) => (
					<li key={post.id} className="border-b py-2">
						<h2 className="text-xl font-semibold">{post.title}</h2>
						<p className="text-gray-600">{post.content}</p>
					</li>
				))}
			</ul>
			<Card>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card Description</CardDescription>
					<CardAction>Card Action</CardAction>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
					<Button>shadcn/ui Button</Button>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</div>
	);
}
