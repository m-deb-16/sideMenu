import React from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

const sideMenu = ({ isActive }) => {
  return (
    <>
      <div className={isActive ? "SideMenu active" : "SideMenu"}>
        <div className="SideMenu_logo">
          <img src={require("../assets/Asset_1.png")} alt="" />
        </div>
        <div className="SideMenu_links">
          <ul>
            <li>
              <Link to={"/Home"}>
                <IoMdHome />
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default sideMenu;
