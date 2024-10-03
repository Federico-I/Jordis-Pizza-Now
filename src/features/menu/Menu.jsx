// eslint-disable-next-line no-unused-vars
import React from "react";
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

function Menu() {

  ////// Render as you fetch strategy ///////
  const menu = useLoaderData();

  return <h1>Menu</h1>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu ;
