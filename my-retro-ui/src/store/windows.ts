import { create } from "zustand";

interface WindowStore {
  openWindows: string[];
  openWindow: (title: string) => void;
  closeWindow: (title: string) => void;
  isWindowOpen: (title: string) => boolean;
}

export const useWindowsStore = create<WindowStore>((set, get) => ({
  openWindows: [],
  openWindow: (title) =>
    set((state) => ({ openWindows: [...new Set([...state.openWindows, title])] })),
  closeWindow: (title) =>
    set((state) => ({
      openWindows: state.openWindows.filter((w) => w !== title),
    })),
  isWindowOpen: (title) => get().openWindows.includes(title),
}));