import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import TodoListView from "../view/TodoListView";

@inject("TodoStore")
@observer
class TodoListContainer extends Component {
  onSelectTodo = (id) => {
    //console.log(id);
    this.props.TodoStore.selectTodo(id);
  };

  onDelete = () => {
    const todo = this.props.TodoStore.gettodo;
    this.props.TodoStore.removeTodo(todo.id);
  };

  render() {
    let todos = this.props.TodoStore.gettodos;
    return (
      <TodoListView
        todos={todos}
        onSelectTodo={this.onSelectTodo}
        onDelete={this.onDelete}
      />
    );
  }
}

export default TodoListContainer;
