// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";



// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input className="input" type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary">{isSubmitting ? "Placing order..." : "Order now"}</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action ({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); // will get data out of the form and style data as an object in the console

  const order = {
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const newOrder = await createOrder(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please give use your correct phone number. We might need it to contact you.";
  
  if (Object.keys(errors).length > 0) return errors; // if there is one or more errors will return "errors" message

  return redirect(`/order/${newOrder.id}`);

}

export default CreateOrder;
