import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TodoList = ({ todos, onDelete, onEdit, onComplete }) => {
  const icons =
    "cursor-pointer mx-1 hover:ring-1 ring-todogreen overflow-hidden transition-all duration-700";
  const navigate = useNavigate();
  return (
    <>
      <div className="float-left mb-[20px] ">
        <p className="text-xl font-bold text-tododark mb-3">
          All Tasks
          <span className=" bg-todoorange px-2 text-todowhite rounded-full">
            {todos.length}
          </span>
        </p>
        <Button
          page={false}
          onClick={() => navigate("/todoform")}
          label="Add task"
        />
      </div>
      <div>
        <table className="w-[100%] h-[40%] mt-5 overflow-scroll">
          <tbody className="">
            {todos.map((t) => (
              <tr key={t.id} className="ring-1 ring-todoblue rounded">
                <td
                  className={`text-sm text-tododarkfade px-6 py-2 whitespace-nowrap ${
                    t.completed ? "line-through" : " no-underline"
                  }`}
                >
                  {t.todo}
                </td>
                <td
                  className={`text-sm text-tododarkfade px-6 py-2 whitespace-nowrap font-medium ${
                    t.completed ? "line-through" : " no-underline"
                  }`}
                >
                  {t.category.name}
                </td>
                <td className="flex my-2 float-right pr-2">
                  <FaEdit
                    size={20}
                    className={`fill-todoblue  ${icons}`}
                    onClick={onEdit}
                  />
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
