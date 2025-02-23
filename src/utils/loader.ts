import { QueryClient } from "@tanstack/query-core";
import client from "./axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        staleTime: Infinity
    },
  },
});

const getpostLikeList = () => ({
  queryKey: ["post_like"],
  queryFn: async () => {
    return await client.get("/data/likes.json");
  },
});

const getCommentList = () => ({
  queryKey: ["comment"],
  queryFn: async () => {
    return await client.get("/data/comments.json");
  },
});

const getPostList = () => ({
  queryKey: ["post"],
  queryFn: async () => {
    return await client.get("/data/posts.json");
  },
});

export const postLikeLoader =
  (queryClient: QueryClient) =>
  async () => {
    const data = await queryClient.ensureQueryData(getpostLikeList())
    return data;
  };


export const postLoader =
  (queryClient: QueryClient) =>
  async () => {
    const data = await queryClient.ensureQueryData(getPostList())
    return data;
  };


export const commentLoader =
  (queryClient: QueryClient) =>
  async () => {
    const data = await queryClient.ensureQueryData(getCommentList())
    return data;
  };