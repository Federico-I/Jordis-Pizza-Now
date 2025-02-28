// eslint-disable-next-line no-unused-vars
import React from "react";
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return <ul></ul>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
