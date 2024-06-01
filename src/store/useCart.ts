import { create } from "zustand";
import { persist} from "zustand/middleware";
import type { useCartType } from "../lib/types";

export const useCart = create<useCartType>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (item: {id: string, price: number, name: string, image: string}) => set(state => ({ items: [...state.items, item] })),
            removeItem: (item: {id: string, price: number, name: string, image: string}) => set(state => ({ items: state.items.filter(i => i.id !== item.id) })),
            getItemCount: () => get().items.length
        }),
        { name: "cart" }
    )
)   