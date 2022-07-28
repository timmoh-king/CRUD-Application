/**
 * @Author: Your name
 * @Date:   2022-07-27 15:44:47
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-07-28 18:05:07
 */
import React from 'react';
import { Route } from 'react-router-dom';
import Button from "./common/Button";
import SignInForm from "./SignInForm";

const Navbar = () => {

    return (
        <nav className="relative w-full h-[55px] flex flex-wrap items-center justify-between bg-todonavbar shadow-lg">
          <div className="container-fluid w-full flex flex-wrap items-center justify-between ml-[50px] mr-[50px]">
            <div className="container-fluid">
              <p className="text-2xl font-semibold">
                  <span className="text-todoorange">Todo</span>
                  <span className="text-todogreen">List</span>
              </p>
            </div>
            <div>
              <Button
                  page={false}
                  label="Log out"
              />
            </div>
          </div>
        </nav>
    );
  };
  
  export default Navbar;
  