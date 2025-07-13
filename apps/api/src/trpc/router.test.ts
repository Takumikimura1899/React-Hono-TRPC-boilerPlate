import { prisma } from "../db";
import { appRouter } from "./router";

vi.mock("../db", () => ({
	prisma: {
		post: {
			findMany: vi.fn().mockResolvedValue([
				{ id: 1, title: "Post 1" },
				{ id: 2, title: "Post 2" },
			]),
		},
	},
}));

describe("tRPC Post Router", () => {
	it("getPosts procedure should return mock posts", async () => {
		const caller = appRouter.createCaller({});
		const posts = await caller.getPosts();

		expect(posts).toHaveLength(2);
		expect(posts[0].title).toBe("Post 1");
		expect(prisma.post.findMany).toHaveBeenCalledOnce();
	});
});
