import React from "react";
import { IoMenu } from "react-icons/io5";

const Burger = ({ setIsActive }) => {
  return (
    <div className="Burger">
      <IoMenu onClick={() => setIsActive(true)} />
    </div>
  );
};

export default Burger;
