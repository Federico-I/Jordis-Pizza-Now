// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartPrice);

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:px-6 text-sm md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>$23.45</span>
      </p>
      <Link href="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
