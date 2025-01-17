// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {

  return (
    <div className="bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6">
      <p className="font-semibold space-x-4 text-stone-300 sm:space-x-6">
        <span> pizzas</span>
        <span>pp</span>
      </p>
      <Link href="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;


/*

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return null;

*/