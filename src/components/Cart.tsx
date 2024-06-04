import { useCart } from "@/store/useCart";
import { Cart as CartIcon } from "iconoir-react";
import { useEffect, useState } from "react";

export default function Cart() {
  const [ quantity, setQuantity ] = useState(0);
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
     <CartIcon />
    <span className="absolute -right-1 -bottom-1 size-4 text-xs bg-red-500 text-white rounded-full text-center">{quantity}</span>
    </a>
    </>
   
  )
}
