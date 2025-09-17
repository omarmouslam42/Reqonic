import React from "react";
import Loader from "./spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <Loader />
    </div>
  );
};
