import React, { Component } from "react";
import TodoListView from "./component/TodoListView";
import TodoEditFormView from "./component/TodoEditFormView";
import "semantic-ui-css/semantic.min.css";
import generateId from "./IDGenerator";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todo: {
        id: "",
        title: "",
        date: "",
      },
    };
    this.date = new Date();
    this.title = "";
  }

  onSetTodoProp = (title, value) => {
    if (title === "title") {
      this.title = value;
    }
    if (title === "date") {
      this.date = value;
    }

    const todo = {
      title: this.title,
      date: this.date,
      id: generateId(10),
    };

    this.setState({
      todo: todo,
    });
  };

  onAddTodo = () => {
    this.setState({
      todos: this.state.todos.concat(this.state.todo),
    });
  };

  render() {
    return (
      <div>
        <TodoListView todos={this.state.todos} />
        <TodoEditFormView
          todo={this.state.todo}
          onSetTodoProp={this.onSetTodoProp}
          onAddTodo={this.onAddTodo}
        />
      </div>
    );
  }
}

export default App;
