import React from "react";
import Forms from "./common/Forms";
import Joi from "joi-browser";
import { getCategories } from "../services/FakeCategories";
import { getTodo } from "../services/FakeTodos";
import { saveTodo } from './../services/FakeTodos';

class TodoForm extends Forms {
  state = {
    data: {
      todo: "",
      todoId: "",
    },
    categories: [],
    errors: {},
  };

  schema = {
    id: Joi.string(),
    todo: Joi.string().required().label("Todo"),
    todoId: Joi.string().required().label("Category"),
  };

  componentDidMount() {
    const { match } = this.props;
    const categories = getCategories();
    this.setState({ ...this.state, categories });

    const todoId = match.params.id;
    if (todoId === "new") return;

    const todo = getTodo(todoId);
    if (!todo) return this.props.history.replace("/");

    this.setState({ ...this.state, data: this.mapToViewModel(todo) });
  };
  
  mapToViewModel(todo) {
    return {
      id: todo.id,
      todo: todo.todo,
      categoryId: todo.category.id,
    };
  }

  doSubmit = () => {
    saveTodo(this.state.data);
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="w-full grid h-screen place-items-center">
        <form
          onSubmit={this.handleSubmit}
          className="w-fit block px-[70px] py-[36px] rounded-[10px] outline-todogreen shadow-md shadow-tododarkfade ring-2 ring-todogreen"
        >
          <h1 className="text-tododark font-medium text-center pb-6 text-[26px]">
            ADD TODOS
          </h1>
          {this.renderInput("todo", " Todo")}
          {this.renderSelect("category", "Category", this.state.categories)}
          {this.renderButton("SAVE")}
        </form>
      </div>
    );
  }
}

export default TodoForm;
