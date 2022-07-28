/**
 * @Author: Your name
 * @Date:   2022-07-27 15:41:33
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-07-28 17:40:49
 */
import React from 'react';

const ListGroup = () => {
    const style =
      "px-6 py-2 text-sm border-b border-todoblue w-full hover:bg-todoblue hover:font-semibold hover:text-todowhite";
    return (
        <div
          className="justify-center mt-[80px]"
          style={{ cursor: "pointer" }}
        >
          <ul className="bg-white rounded-md border border-todoblue w-60 text-tododarkfade">
            <li className={style}>All</li>
            <li className={style}>Urgent</li>
            <li className={style}>Important</li>
            <li className={style}>Delegate</li>
            <li className={style}>Later</li>
          </ul>
      </div>
    );
  };
  
  export default ListGroup;
  