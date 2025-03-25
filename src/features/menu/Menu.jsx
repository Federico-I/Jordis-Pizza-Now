// eslint-disable-next-line no-unused-vars
import React from "react";
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return <ul className="divide divide-stone-300">
    {menu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id}/>)}
  </ul>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
