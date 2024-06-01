export type Category = {
    id: string;
    name: string;
    desc: string;
    logoSrc: string;
    items: Array<{
      id: string;
      name: string;
      price: number;
      images: Array<string>;
    }>;
  };
  

export type Shirt = {
    id: string,
    name: string,
    price: number,
    images: string[],
}


export type useCartType = {
    items: {id: string, price: number, name: string, image: string}[],
    addItem: (item: {id: string, price: number, name: string, image: string}) => void,
    removeItem: (item: {id: string, price: number, name: string, image: string}) => void,
    getItemCount: () => number,
}