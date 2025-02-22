import { create } from "zustand";

interface UserStore {
    current_user_id: number
    setCurrentUserId: (id: number) => void
}

const useUserStore = create<UserStore>((set) => ({
  current_user_id: 0,
  setCurrentUserId: (id) => set({ current_user_id: id }),
}));

export default useUserStore;