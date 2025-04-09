// eslint-disable-next-line no-unused-vars
import React from "react";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username)

  return (
    <div className="my-10 text-center sm:my-16 px-4">
      <h1 className="text-xl mb-8 font-semibold text-center md:text-3xl">
        The best pizza
        <br />
        <span className="text-red-400">
          Straight out of the oven, straight to you
        </span>
      </h1>

      {username === "" ? <CreateUser /> : <Button to="/menu" type="primary"></Button>}
    </div>
  );
}

export default Home;
