// eslint-disable-next-line no-unused-vars
import React from "react";

// Test ID: IIDSAT
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";


function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex fle-wrap items-center justify-between">
        <h2 className="text-xl font-semibold"> Order #{id} status</h2>

        <div className="space-x-2">
          {priority && <span className="round-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase">Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
