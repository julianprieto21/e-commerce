import { CATEGORIES, type Category } from "@/lib/CATEGORIES";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState<string>("");

  const handleChange = useDebouncedCallback((value: string) => {
    setSearch(value);
  }, 300);

  useEffect(() => {
    setCategories(
      CATEGORIES.filter((category) =>
        category.name.toLowerCase().includes(search.toLowerCase())
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
        <div className="grid grid-cols-1 gap-12 lg:gap-y-20 md:grid-cols-2">
          {categories.map((category) => (
            <figure key={category.id}>
              <a href={`/${category.id}`}>
                <picture className="w-full rounded-3xl shadow-lg bg-color-300 grid place-content-center hover:scale-105 transition">
                  <img
                    src={category.logoSrc}
                    alt={category.name}
                    className="w-[1280px] h-[360px] aspect-auto rounded-3xl"
                  />
                </picture>
                <div>
                  <h3 className="pt-4 pl-3 mt-1 text-2xl font-medium leading-6 text-color-500">
                    {category.name}
                  </h3>
                </div>
              </a>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
