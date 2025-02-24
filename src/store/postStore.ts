import { create } from "zustand";
import { post } from "@/interface/interface";

interface PostStore {
    postList: post[]
    setPostList: (post: post[]) => void
}

const usePostStore = create<PostStore>((set) => ({
    postList: [],
    setPostList: (list) => set({postList: list})
}));

export default usePostStore;