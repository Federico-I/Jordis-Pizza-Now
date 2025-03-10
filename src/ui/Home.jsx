// eslint-disable-next-line no-unused-vars
import React from "react";
import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">
        The best pizza
        <br />
        <span className="text-red-400">
          Straight out of the oven, straight to you
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
