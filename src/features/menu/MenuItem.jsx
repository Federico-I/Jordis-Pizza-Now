// eslint-disable-next-line no-unused-vars
import React from "react";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";


function MenuItem({ pizza }) {
  const [ id, name, unitPrice, ingredients, soldOut, imageUrl ] = pizza;

  function handleAddToCart() {
    const newItem = {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  };

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`} />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium" >{name}</p>
        <p className="text-sm capitalize italic text-stone-500" >{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? ( <p className="text-sm">{formatCurrency(unitPrice)}</p> ) : ( <p className="text-sm uppercase font-medium text-stone-500" >Sold out</p> )}

          {!soldOut && <Button type="small" onClick={handleAddToCart}> Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
