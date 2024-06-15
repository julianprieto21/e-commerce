import { useCart } from "@/store/useCart";
import { useEffect, useState } from "react";

export default function AddToCart({ product }: { product: any }) {
  const [inCart, setInCart] = useState<boolean>(false);
  const [ quantity, setQuantity ] = useState<number>(1);
  const { items, addItem, removeItem } = useCart((state) => state);
  const addToCart = () => {

    addItem({
      id: product.id,
      price: product.price,
      category: product.category,
      name: product.name,
      image: product.images[0],
      quantity: quantity,
    });
    setInCart(true);
  };
  const removeFromCart = () => {
    removeItem({
      id: product.id,
      price: product.price,
      category: product.category,
      name: product.name,
      image: product.images[0],
    });
    setInCart(false);
  };

  useEffect(() => {
    const inCart = items.find((item) => item.id === product.id);
    if (inCart) {
      setInCart(true);
    }
  }, []);

  const Counter = () => (
    <div className="flex flex-row gap-2">
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="bg-color-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition"
      >
        +
      </button>
      <span className="text-color-500 bg-neutral-100 border border-color-500 rounded w-16 grid place-content-center">{quantity}</span>
      <button
        onClick={() => {if (quantity > 1) setQuantity(quantity - 1)}}
        className="bg-color-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition"
      >
        -
      </button>
    </div>
  )


  return (
    <>
      {!inCart ? (
        <div className="flex flex-row gap-4">
        <button
          onClick={addToCart}
          className="bg-color-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded w-44 transition hover:scale-105"
        >
          + Añadir al carrito
        </button>
        <Counter />
        </div>
      ) : (
        <div className="flex flex-row gap-2">
          <button className="group bg-green-500 text-white font-semibold py-2 px-4 rounded w-44">
            <h1>Añadido!</h1>
          </button>
          <button
            title="Eliminar del carrito"
            onClick={removeFromCart}
            className="w-10 rounded bg-red-500 grid place-content-center hover:text-lg transition-all text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" 
            stroke="currentColor" fill="none" 
            strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth="2" viewBox="0 0 24 24" data-icon="SvgTrash" aria-hidden="true"><path d="M3.4 6.2h17.2m-15.3 0V19a2.063 2.063 0 00.538 1.413A1.836 1.836 0 007.2 21h9.6a1.861 1.861 0 001.325-.587A2.039 2.039 0 0018.7 19V6.2M10 11.6l2 2 2 2m0-4l-2 2-2 2m-.6-9.4V3.9a.98.98 0 01.212-.637A.746.746 0 0110.2 3h3.6a.743.743 0 01.587.263.975.975 0 01.213.637v2.3"></path></svg>
          </button>
        </div>
      )}
    </>
  );
}
