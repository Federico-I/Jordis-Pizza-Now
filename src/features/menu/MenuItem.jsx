// eslint-disable-next-line no-unused-vars
import React from "react";
import { formatCurrency } from "../../utils/helpers";


function MenuItem({ pizza }) {
  const [ id, name, unitPrice, ingredients, soldOut, imageUrl ] = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`} />
      <div className="flex flex-col">
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div className="mt-auto">
          {!soldOut ? ( <p className="text-sm uppercase font-medium text-stone-500">{formatCurrency(unitPrice)}</p> ) : ( <p>Sold out</p> )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
