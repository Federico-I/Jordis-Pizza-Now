/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import DeleteItem from "../cart/DeleteItem";

function MenuItem({ pizza }) {

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddToCart () {
    const newItem = [
      {
        pizzaId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice * 1,
      },
    ]
  };

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}/>
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (<p className="text-sm">{formatCurrency(unitPrice)}</p>) : (<p className="text-sm uppercase font-medium text-stone-600">Sold out</p>)}

          <DeleteItem pizzaId={id}/>

          {!soldOut && <Button type="samll" onClick={handleAddToCart}>Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
