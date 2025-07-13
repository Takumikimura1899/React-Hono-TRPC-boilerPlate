export declare const appRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    getPosts: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            title: string;
            content: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
        meta: object;
    }>;
    createPost: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            title: string;
            content?: string | undefined;
        };
        output: {
            title: string;
            content: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        meta: object;
    }>;
}>>;
export type AppRouter = typeof appRouter;
