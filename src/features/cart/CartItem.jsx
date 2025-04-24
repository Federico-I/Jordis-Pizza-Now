/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getQuantityById } from "./CartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuanity = useSelector(getQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:item-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm front-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity pizzaId={ pizzaId } currentQuanity={currentQuanity}/>
        <DeleteItem pizzaId={ pizzaId }/>
      </div>
    </li>
  );
}

export default CartItem;
