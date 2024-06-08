import { formatPrice } from "@/lib/utils";
import { useCart } from "@/store/useCart";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";

const BuyButton = () => {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  console.log(import.meta.env.PUBLIC_KEY);
  initMercadoPago(import.meta.env.PUBLIC_KEY, {
    locale: "es-AR",
  });

  const CreatePreference = async () => {
    try {
      const response = await fetch("/api/create_preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Camiseta de la Casa",
          description: "Camiseta de la Casa",
          quantity: 1,
          unit_price: 100,
          category_id: 1,
          image_url: "/images/premier-league/ars-1.webp",
        }),
      });
      const id = await response.json();
      console.log(id);
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const preferenceId = await CreatePreference();
    if (preferenceId) {
      setPreferenceId(preferenceId);
    }
  };

  return (
    <button
      type="button"
      title="Comprar"
      className="rounded-md px-4 py-2 bg-green-500 text-white"
      onClick={handleBuy}
    >
      Terminar compra
      {preferenceId && (
        <Wallet initialization={{ preferenceId: preferenceId }} />
      )}
    </button>
  );
};

const ClearButton = () => {
  const { clearCart } = useCart((state) => state);
  return (
    <button
      type="button"
      onClick={clearCart}
      title="Borrar"
      className="rounded-md px-4 py-2 bg-red-500 text-white"
    >
      Vaciar carrito
    </button>
  );
};

export default function CartList() {
  const { items, removeItem } = useCart((state) => state);
  return (
    <div className="flex flex-col gap-6 mx-80">
      <div className="flex flex-row gap-4">
        <BuyButton />
        <ClearButton />
      </div>
      {items.length > 0 ? (
        items.map((product: any) => (
          <div
            key={product.id}
            className="flex flex-row gap-4 items-center justify-between bg-color-200 p-2 rounded-md shadow-sm"
          >
            <div className="flex flex-row gap-2">
              <img
                src={`/images/${product.category}/${product.image}`}
                alt=""
                className="w-16 h-16 rounded-md"
              />
              <div className="flex flex-col gap-3">
                <p className="text-lg font-semibold">
                  Camiseta de {product.name}
                </p>
                <p className="text-sm text-palette-500">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>

            <button
              type="button"
              title="Eliminar"
              onClick={() => removeItem(product)}
              className="rounded-md px-4 py-2 hover:text-red-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" data-icon="SvgTrash" aria-hidden="true"><path d="M3.4 6.2h17.2m-15.3 0V19a2.063 2.063 0 00.538 1.413A1.836 1.836 0 007.2 21h9.6a1.861 1.861 0 001.325-.587A2.039 2.039 0 0018.7 19V6.2M10 11.6l2 2 2 2m0-4l-2 2-2 2m-.6-9.4V3.9a.98.98 0 01.212-.637A.746.746 0 0110.2 3h3.6a.743.743 0 01.587.263.975.975 0 01.213.637v2.3"></path></svg>
            </button>
          </div>
        ))
      ) : (
        <div className="text-center">
          <p className="text-lg font-semibold">
            No tienes productos en el carrito
          </p>
        </div>
      )}
    </div>
  );
}
