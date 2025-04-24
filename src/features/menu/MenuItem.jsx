/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import DeleteItem from "../cart/DeleteItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getQuantityById } from "../cart/CartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  const currentQuanity = useSelector(getQuantityById(id));

  const InCart = currentQuanity > 0;
  
  function handleAddToCart () {
    const newItem = {
        pizzaId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}/>
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (<p className="text-sm">{formatCurrency(unitPrice)}</p>) : (<p className="text-sm uppercase font-medium text-stone-600">Sold out</p>)}

          { InCart && 
            <div>
              <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuanity}/>
              <DeleteItem pizzaId={id}/>
            </div>
          }

          {!soldOut && !InCart && <Button type="samll" onClick={handleAddToCart}>Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
