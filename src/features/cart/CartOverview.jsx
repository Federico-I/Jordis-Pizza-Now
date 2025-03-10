// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-600 text-stone-200 uppercase">
      <p className="font-semibold text-stone-400">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link href="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
