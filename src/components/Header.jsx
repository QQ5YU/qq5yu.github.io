import React from "react";
import { Nav } from "./Nav";
export const Header = () => {
  return (
    <div className="border-b p-3 flex justify-between justify-items-center">
      <span className="font-bold">Header</span>
      <Nav />
    </div>
  );
};
