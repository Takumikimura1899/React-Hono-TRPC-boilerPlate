import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { prisma } from "../db";
const t = initTRPC.create();
export const appRouter = t.router({
    getPosts: t.procedure.query(() => {
        return prisma.post.findMany({ orderBy: { createdAt: "desc" } });
    }),
    createPost: t.procedure
        .input(z.object({
        title: z.string().min(1),
        content: z.string().optional(),
    }))
        .mutation(({ input }) => {
        return prisma.post.create({
            data: {
                title: input.title,
                content: input.content || "",
            },
        });
    }),
});
