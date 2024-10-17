// eslint-disable-next-line no-unused-vars
import React from "react";

function CartOverview() {
  return (
    <div className="bg-stone-800 p-4 uppercase text-stone-200 sm:px-6 text-sm md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
