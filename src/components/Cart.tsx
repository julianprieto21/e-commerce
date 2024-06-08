import { useCart } from "@/store/useCart";
import { useEffect, useState } from "react";

export default function Cart() {
  const [quantity, setQuantity] = useState(0);
  const { items } = useCart((state) => state);

  useEffect(() => {
    setQuantity(items.length);
  }, [items]);
  return (
    <>
      <a
        href="/cart"
        className="shadow cursor-pointer fixed m-8 right-0 top-0 z-10 flex items-center justify-center p-2 text-black bg-color-900 rounded-lg hover:scale-110 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
        stroke="currentColor" fill="none" 
        strokeLinecap="round" strokeLinejoin="round" 
        strokeWidth="2" viewBox="0 0 24 24" 
        data-icon="SvgShoppingCart" aria-hidden="true"><path d="M20.112 19.4a1.629 1.629 0 11-1.629-1.629 1.63 1.63 0 011.629 1.629zM9.941 17.768a1.629 1.629 0 101.628 1.632 1.629 1.629 0 00-1.628-1.632zM3 3.006h1.678a2.113 2.113 0 011.965 1.573l2.051 9.152a2.114 2.114 0 001.965 1.574h6.788a2.153 2.153 0 001.989-1.568L20.957 8.8a1.233 1.233 0 00-1.236-1.588L11.4 7.064"></path></svg>
        <span className="absolute -right-1 -bottom-1 size-4 px-1 text-[10px] bg-red-500 text-white rounded-full text-center">
          {quantity}
        </span>
      </a>
    </>
  );
}
