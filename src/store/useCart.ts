import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { useCartType } from "../lib/types";

export const useCart = create<useCartType>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item: {
        id: string;
        price: number;
        category: string;
        name: string;
        image: string;
        quantity: number;
      }) => set((state) => ({ items: [...state.items, item] })),
      removeItem: (item: {
        id: string;
        price: number;
        category: string;
        name: string;
        image: string;
      }) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== item.id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    { name: "cart" }
  )
);
