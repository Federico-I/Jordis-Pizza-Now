// eslint-disable-next-line no-unused-vars
import React from "react";
import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="text-xl mb-8 font-semibold text-center">
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
