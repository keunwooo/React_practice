import React, { useState, useCallback } from "react";
import TodoListView from "./component/TodoListView";
import TodoEditFormView from "./component/TodoEditFormView";
import "semantic-ui-css/semantic.min.css";
import generateId from "./IDGenerator";

import { observable } from "mobx";
import { observer } from "mobx-react";

const App = () => {
  const [id, setId] = useState("");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    date: new Date(),
  });

  const onSetTodoProp = (title, value) => {
    console.log("추가하기");

    if (title === "title") {
      todo.title = value;
    }

    if (title === "date") {
      todo.date = value;
    }

    const tmp_todo = {
      id: generateId(10),
      title: todo.title,
      date: todo.date,
    };

    setTodo(tmp_todo);
  };

  const onAddTodo = () => {
    setTodos(todos.concat(todo));
    setTodo({});
  };

  const setText = useCallback((id, title, date) => {
    const tmp_todo = {
      id: id,
      title: title,
      date: date,
    };
    setId(id);
    setTodo(tmp_todo);
  });

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onModify = (title, date) => {
    const tmp = todos.map((todo) =>
      todo.id === id ? { ...todo, title: title, date: date } : todo
    );

    console.log(tmp);
    setTodos(tmp);
    setTodo({});
  };

  return (
    <div>
      <TodoEditFormView
        todo={todo}
        onSetTodoProp={onSetTodoProp}
        onAddTodo={onAddTodo}
        onModify={onModify}
      />
      <TodoListView todos={todos} setText={setText} onRemove={onRemove} />
    </div>
  );
};

export default App;
