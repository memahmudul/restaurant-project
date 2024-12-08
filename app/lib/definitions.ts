// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type Restaurant = {
  id: string;
  name: string;
  slogan:string,
  bannerImage:string,
  email: string;
  password: string;
  subscription:string
};

export type Food = {
  id: string;
  restaurantId: string;
  name:string,
    category:string,
    image:string,
    price:number,
    isAvailable: boolean,
    desc:string
};


interface Cart {
  foodId: string,
  quantity: number,
}

export type Order = {
  id: string,
  restaurantId: string,
  cart: Cart[],
  tableNo: string,
  status: string,
};


