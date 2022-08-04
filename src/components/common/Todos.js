import React from "react";
import { Link } from "react-router-dom";

import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Button from './Button';


const TodoList = ({ todos, onDelete, onComplete, history }) => {
  const icons =
    "cursor-pointer mx-1 hover:ring-1 ring-todogreen overflow-hidden transition-all duration-700";
  return (
    <>
      <div className="float-left mb-[20px] ">
        <p className="text-xl font-bold text-tododark mb-3">
          All Tasks
          <span className=" bg-todoblue px-2 ml-2 text-todowhite rounded-full">
            {todos.length}
          </span>
        </p>

          <Link to="/todo/new">
            <Button page={false} label="Add task" />
          </Link>
      </div>
      <div>
        <table className="w-[100%] h-[40%] mt-5 overflow-scroll">
          <tbody className="">
            {todos.map((t) => (
              <tr key={t.id} className="ring-1 ring-todoblue rounded">
                <td
                  className={`text-sm text-tododarkfade px-6 py-2 whitespace-nowrap ${
                    t.completed ? "line-through" : ""
                  }`}
                >
                  {t.todo}
                </td>
                <td
                  className={`text-sm text-tododarkfade px-6 py-2 whitespace-nowrap font-medium ${
                    t.completed ? "line-through" : ""
                  }`}
                >
                  {t.category.name}
                </td>
                <td className="flex my-2 float-right pr-2">
                  <Link to="/todo/new">
                    <FaEdit
                      size={20}
                      className={`fill-todoblue  ${icons}`}
                    />
                  </Link>

                  {t.completed ? (
                    <ImCheckboxChecked
                      size={20}
                      className={`fill-todogreen ${icons}`}
                      onClick={() => onComplete(t)}
                    />
                  ) : (
                    <ImCheckboxUnchecked
                      size={20}
                      className={`fill-todogreen ${icons}`}
                      onClick={() => onComplete(t)}
                    />
                  )}

                  <AiFillDelete
                    size={20}
                    className={`fill-todoorange ${icons}`}
                    onClick={() => onDelete(t)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoList;
