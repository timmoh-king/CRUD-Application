import React from "react";
import { Link } from "react-router-dom";
import Button from "./common/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate.push("/signin");
  };
  return (
    <nav className="relative w-full h-[55px] flex flex-wrap items-center  bg-todonavbar shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between ml-[50px] mr-[50px]">
        <div className="container-fluid">
          <p className="text-2xl font-semibold">
            <span className="text-todoorange">Todo</span>
            <span className="text-todogreen">List</span>
          </p>
        </div>
        <div className=" float-right">
          <Link to="/signin">
            <Button onClick={navigateTo} page={false} label="Log out" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
