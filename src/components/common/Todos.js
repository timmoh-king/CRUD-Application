/**
 * @Author: Your name
 * @Date:   2022-07-27 15:58:13
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-07-28 17:49:43
 */
import React, { Component } from 'react';
import { BsPencilSquare } from "react-icons/bs";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

class Todos extends Component {
    state = {  } 
    render() { 
        const style = "text-sm text-tododarkfade font-regular px-6 py-3 whitespace-nowrap"
        
        return (
            <table className="w-full mt-5">
            <tbody>
              <tr className="ring-1 ring-todoblue rounded-1 rounded-[5px]">
                <td className= {style}>
                  Attend DAM stand up
                </td>
                <td className={style}>
                  Important
                </td>
                <td className="flex py-3">
                  <BsPencilSquare className='fill-todoblue m-1'/>  
                  <BsFillCheckSquareFill className='fill-todogreen m-1'/>
                  <BsFillTrashFill className='fill-todoorange m-1'/>
                </td>
              </tr>
              <tr className="ring-1 ring-todoblue rounded-1 rounded-[5px]">
                <td className={style}>
                  Go hiking at Ngong hills
                </td>
                <td className={style}>
                  Urgent
                </td>
                <td className="flex py-3">
                  <BsPencilSquare className='fill-todoblue m-1'/>  
                  <BsFillCheckSquareFill className='fill-todogreen m-1'/>
                  <BsFillTrashFill className='fill-todoorange m-1'/>
                </td>
              </tr>
              <tr className="ring-1 ring-todoblue rounded-1 rounded-[5px]">
                <td className={style}>
                  Attend USIU innovation session
                </td>
                <td className={style}>
                  Later
                </td>
                <td className="flex py-3">
                  <BsPencilSquare className='fill-todoblue m-1'/>  
                  <BsFillCheckSquareFill className='fill-todogreen m-1'/>
                  <BsFillTrashFill className='fill-todoorange m-1'/>
                </td>
              </tr>
              <tr className="ring-1 ring-todoblue rounded-1 rounded-[5px]">
                <td className={style}>
                  Watch Mosh Hamedani course
                </td>
                <td className={style}>
                  Delegate
                </td>
                <td className="flex py-3">
                  <BsPencilSquare className='fill-todoblue m-1'/>  
                  <BsFillCheckSquareFill className='fill-todogreen m-1'/>
                  <BsFillTrashFill className='fill-todoorange m-1'/>
                </td>
              </tr>
            </tbody>
          </table>
        );
    }
}
 
export default Todos;