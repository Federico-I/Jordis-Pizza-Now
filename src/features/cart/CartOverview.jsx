// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className=" flex items-center justify-between bg-stone-600 text-sm text-stone-200 uppercase px-4 py3 sm:px-6 md:text-base">
      <p className="font-semibold text-stone-400 space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link href="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
