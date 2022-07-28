/**
 * @Author: Your name
 * @Date:   2022-07-27 15:40:40
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-07-27 17:51:40
 */
import React from "react";
import ListGroup from "./ListGroup";
import Navbar from "./Navbar";
import TodoList from "./TodoList";

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex">
        <div className="container flex ml-[50px] mr-50px] max-w-sm">
          <ListGroup />
        </div>
        <div className="min-w-[883px]">
            <TodoList />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
