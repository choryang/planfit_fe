import { create } from "zustand";
import { like } from "@/interface/interface";

interface LikeStore {
    likes: like[]
    setLikeList: (list: like[]) => void
}

const useLikeStore = create<LikeStore>((set) => ({
    likes: [],
    setLikeList: (list) => set({likes: list})
}));

export default useLikeStore;