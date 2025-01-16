// eslint-disable-next-line no-unused-vars
import React from "react";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div >
      <h1 className="text-center text-xl font-semibold text-stone-700">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
    </div>
  );
}

export default Home;


/*

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my16 ">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      
      {username === "" ? <CreateUser /> : <Button to="/menu" type="primary">Continue ordering, {username}</Button>}
    </div>
  );
}

export default Home;

*/