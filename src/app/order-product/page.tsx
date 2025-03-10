"use client";
import { useRouter } from "next/navigation";

const Order = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
    console.log("Placing your order");
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default Order;
