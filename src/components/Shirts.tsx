import { CATEGORIES } from "@/lib/CATEGORIES";
import { Category } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Shirts({ cid }: { cid: string }) {
  const [category, setCategory] = useState<Category | undefined>(
    CATEGORIES.find((cat) => cat.id == cid)
  );
  const [shirts, setShirts] = useState<any[]>(category?.items || []);
  const [search, setSearch] = useState<string>("");

  const handleChange = useDebouncedCallback((value: string) => {
    setSearch(value);
  }, 300);

  useEffect(() => {
    if (!category) return;
    setShirts(
      category.items.filter((shirt) =>
        shirt.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(search.toLowerCase())
      )
    );
  }, [search]);
  return (
    <main className="relative grid place-content-center">
      <input
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Buscar categorias..."
        type="search"
        className="relative w-[800px] mx-auto h-16 px-4 rounded-xl bg-color-400 placeholder:text-white text-white focus:outline-none"
      />
      <div className="relative mx-auto px-8 max-w-6xl py-12 md:px-12 mt-20">
        <div className="grid grid-cols-1 gap-10 lg:gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {category &&
            shirts.map((shirt) => (
              <figure key={shirt.id}>
                <a href={`/${category.id}/${shirt.id}`}>
                  <img
                    src={`/images/${category.id}/${shirt.images[0]}`}
                    alt={`Camiseta de ${shirt.name}`}
                    className="w-full rounded-3xl shadow-lg bg-color-300 grid place-content-center hover:scale-105 transition"
                  />
                  <div className="flex w-full justify-between">
                    <h3 className="pt-4 pl-3 mt-1 text-lg font-medium leading-6 text-color-500">
                      {shirt.name}
                    </h3>
                    <p className="pt-4 pr-3 mt-1 text-md font-medium leading-6 text-color-400/60">
                      {formatPrice(shirt.price)}
                    </p>
                  </div>
                </a>
              </figure>
            ))}
        </div>
      </div>
    </main>
  );
}
