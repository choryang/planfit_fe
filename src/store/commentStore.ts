import { create } from "zustand";
import { comment } from "@/interface/interface";

interface CommentStore {
    commentList: comment[]
    setCommentList: (list: comment[]) => void
}

const useCommentStore = create<CommentStore>((set) => ({
    commentList: [],
    setCommentList: (list) => set({commentList: list})
}));

export default useCommentStore;