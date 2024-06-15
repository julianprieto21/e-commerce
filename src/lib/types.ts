export type Category = {
  id: string;
  name: string;
  desc: string;
  logoSrc: string;
  items: string[];
};

export type ShirtType = {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string[];
};

export type useCartType = {
  items: {
    id: string;
    price: number;
    category: string;
    name: string;
    image: string;
    quantity: number;
  }[];
  addItem: (item: {
    id: string;
    price: number;
    category: string;
    name: string;
    image: string;
    quantity: number;
  }) => void;
  removeItem: (item: {
    id: string;
    price: number;
    category: string;
    name: string;
    image: string;
  }) => void;
  clearCart: () => void;
};
