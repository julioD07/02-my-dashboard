import { CartCounter } from "@/app/shopping-cart/components/CartCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shopping Cart",
    description: "Shopping Cart",
}

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={5}/>
    </div>
  );
};

export default page;
