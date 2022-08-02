import React, { Component } from "react";
import Todos from "./common/Todos";
import ListGroup from "./ListGroup";
import { getTodos } from "../services/FakeTodos";
import { getCategories } from "../services/FakeCategories";

class Home extends Component {
  state = {
    categories: [],
    todos: [],
    selectedCategory: {},
  };

  componentDidMount() {
    const categories = [{ id: "", name: "All Todos" }, ...getCategories()];
    this.setState({ todos: getTodos(), categories });
  }

  handleDelete = (todo) => {
    const todos = this.state.todos.filter((t) => t.id !== todo.id);
    this.setState({ todos });
  };

  handleComplite = (todo) => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todos[index] };
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  };

  handleEdit = () => {};

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  };
  render() {
    const { todos: allTodos, categories, selectedCategory } = this.state;

    const filtered = selectedCategory && selectedCategory.id
      ? allTodos.filter((todo) => todo.category.id === selectedCategory.id)
      : allTodos;

    return (
      <>
        <div className="flex mt-[50px]">
          <div className="container flex ml-[50px] mr-50px] max-w-sm">
            <ListGroup
              categories={categories}
              onCategorySelect={this.handleCategorySelect}
              selectedItem={selectedCategory}
            />
          </div>
          <div className="w-[60%]">
            <Todos
              todos={filtered}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
              onComplete={this.handleComplite}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
