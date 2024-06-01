import { useCart } from "@/store/useCart";
import { useEffect, useState } from "react";
import { Trash } from "iconoir-react";

export default function AddToCart({ product }: { product: any }) {
  const [inCart, setInCart] = useState<boolean>(false);
  const { items, addItem, removeItem } = useCart((state) => state);
  const addToCart = () => {
    console.log(items);
    addItem({ id: product.id, price: product.price, name: product.name, image: product.images[0] });
    setInCart(true);
  }
  const removeFromCart = () => {
    removeItem({ id: product.id, price: product.price, name: product.name, image: product.images[0] });
    setInCart(false);
  }

  return (
    <>
    {
      !inCart ? ( 
      <button onClick={addToCart} className="bg-color-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded w-44 transition hover:scale-105">
        + Añadir al carrito
      </button>
      ) : (
        <div className="flex flex-row gap-2">
        <button className="group bg-green-500 text-white font-semibold py-2 px-4 rounded w-44">
          <h1>Añadido!</h1>
        </button>
        <button onClick={removeFromCart} className="w-10 rounded bg-red-500 grid place-content-center hover:text-lg transition-all text-white"><Trash /></button>
        </div>
        
      )
    }
    </>
    
  )
}
