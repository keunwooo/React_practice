import React, { Component } from "react";
import { observer, inject, Provider } from "mobx-react";
import TodoEditFormView from "../view/TodoEditFormView";
import generateId from "../IDGenerator";

@inject("TodoStore")
@observer
class TodoEditContainer extends Component {
  //todo,onSetTodoProp,onAddTodo
  //컨테이너는 뷰가 뿌리도록 몹엑스와 통신해서 필요한 데이터를 ~~
  onSetTodoProp = (name, value) => {
    //TodoStore의 setTodoProp(name,value) 호출
    // const { todoStore } = this.props;
    // todoStore.setTodoProps(name, value);
    this.props.TodoStore.setTodoProps(name, value);
  };

  onAddTodo = () => {
    //TodoStore의 addTodo(todo) 호출
    const { TodoStore } = this.props;
    //값 변경할려고 임시 변수 만들어서 todo 받아오고 변경
    let todo = this.props.TodoStore.gettodo;
    //기존의 todo 에 id 변경
    todo = { ...todo, id: generateId(5) };
    this.props.TodoStore.addTodo(todo);
  };

  onModify = () => {
    //현재 todo의 상태를 가져와서 수정에 넘겨주자.
    const todo = this.props.TodoStore.gettodo;
    this.props.TodoStore.modifyTodo(todo);
  };

  onDelete = () => {
    const todo = this.props.TodoStore.gettodo;
    this.props.TodoStore.removeTodo(todo.id);
  };

  render() {
    const todo = this.props.TodoStore.gettodo;
    //todoStore 에 있는 값을 가져옴
    // const todo = this.props.TodoStore; //todo->TodoStore
    // TodoStore를 레퍼런스한다.
    return (
      <TodoEditFormView
        todo={todo}
        onSetTodoProp={this.onSetTodoProp}
        onAddTodo={this.onAddTodo}
        onModify={this.onModify}
        onDelete={this.onDelete}
      />
    );
  }
}

export default TodoEditContainer;
