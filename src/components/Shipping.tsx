import { useEffect, useState } from "react";
import { POSTAL_CODES } from "@/lib/consts/POSTAL";
import { useCart } from "@/store/useCart";

export const Shipping = () => {
  const [postalCode, setPostalCode] = useState("");
  const [location, setLocation] = useState("Ingrese su código postal");
  const [shippingPrice, setShippingPrice] = useState(0);
  const { items, addItem } = useCart((state) => state);

  useEffect(() => {
    if (postalCode && postalCode.length === 4) {
      setLocation(
        POSTAL_CODES.find((postal) =>
          postal.codigosPostales.includes(postalCode)
        )?.localidad ?? "Codigo no encontrado"
      );
    } else if (postalCode.length >= 1 && postalCode.length <= 4) {
      setLocation("Ingrese un codigo postal válido");
    } else {
      setLocation("Ingrese su código postal");
    }
  }, [postalCode]);

  const calculateShippingPrice = () => {
    const shippingPrice = items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setShippingPrice(Math.floor(shippingPrice * Math.random() * 2000));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (postalCode.length < 4) return;
    if (items.length == 0) return;
    if (items.find((item) => item.id === "shipping")) return;

    calculateShippingPrice();
    addItem({
      id: "shipping",
      price: shippingPrice,
      category: "",
      name: `Envío a ${location}`,
      image: "shippingLogo.png",
      quantity: 1,
    });
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          title="postal-code"
          maxLength={4}
          onChange={(e) => setPostalCode(e.target.value)}
          className="block py-2.5 px-2 w-full text-sm text-color-400 bg-transparent border-0 border-b-2 border-color-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
        />
        <label
          htmlFor="postal-code"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Código postal
        </label>
      </div>
      <p className="text-sm text-color-500">{location}</p>
    </form>
  );
};
