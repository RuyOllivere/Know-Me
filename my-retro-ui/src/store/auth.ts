import { create } from "zustand";

interface AuthState {
  authinicated: boolean;
  nickname: string;
  login: (nickname: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  authinicated: false,
  nickname: "",
  login: (nickname: string) => set({ authinicated: true, nickname }),
  logout: () => set({ authinicated: false, nickname: "" }),
}));
