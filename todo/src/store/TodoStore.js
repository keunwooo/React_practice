import { observable, computed, action } from "mobx";

class TodoStore {
  //관리해야하는 state 객체 @observable 선언 및 초기화
  @observable todos = [];
  @observable todo = {
    date: new Date(),
  };

  //state 데이터를 리턴 - @computed 함수로 정의
  @computed
  get gettodo() {
    return this.todo ? { ...this.todo } : {};
  }

  @computed
  get gettodos() {
    return this.todos ? this.todos.slice() : [];
  }
  //state 데이터 변경 @action 함수 구현
  @action
  setTodoProps(name, value) {
    this.todo = {
      //...this.todo를 붙인 의미? onchange 시 date 또는 title이 갱신되기 때문에
      //지금까지 작성된 todo에 date or title을 붙인다. ex) title 작성하고 나면 todo객체에는
      //title 만 존재. 추가로 date 작성시 todo의 title 정보를 붙이고, date를 추가.
      ...this.todo,
      [name]: value,
    };
  }
  @action
  // addTodo(){
  //   this.todos.concat({...this.todo,this.todo.id:generatedId(5)});
  // }
  addTodo(todo) {
    this.todos.push(todo);
  }

  @action
  removeTodo(id) {
    //todos 에 id인 todo 삭제
    this.todos = this.todos.filter((element) => element.id !== this.todo.id);
  }

  @action
  modifyTodo(todo) {
    //todos 에서 local 변수로 들어온 todo.id와 같은 객체 수정
    //console.log(todo);

    this.todos = this.todos.map((element) =>
      element.id === todo.id ? todo : element
    );
    //map 으로 탐색하면서 각 element로 바뀐 todo의 id와 같으면 바뀐 toodo로 바꾸고 아니면
    //그대로.
    //todo는 수정하기를 누른시점의 todo를 넘기고 받도록 하자.
  }

  @action
  selectTodo(id) {
    //todos 에서 id가 같은 todo 객체를 리턴
    this.todo = this.todos.find((todo) => todo.id === id);
  }
}

//객체를 생성해서 export 해준다.
export default new TodoStore();
