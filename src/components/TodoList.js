/**
 * @Author: Your name
 * @Date:   2022-07-27 15:54:56
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-07-27 17:54:23
 */
import React, { Component } from 'react';
import Button from './common/Button';
import Todos from './common/Todos';

class TodoList extends Component {
    state = {};
    render() {
      return (
        <div className="m-10">
          <p className="text-xl font-bold text-tododark mb-3">
              All Tasks
          </p>
          <Button 
              page={false} 
              label="Add task" 
          />
          <div>
              <Todos />
          </div>
        </div>
      );
    }
  }
  
  export default TodoList;
  