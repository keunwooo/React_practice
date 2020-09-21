import React from "react"; //app.required
//import logo from './logo.svg';
//import './App.css';

function App() {
  const name = "리액트";
  const size = "50";
  //JSX 는 Wellformed - root element only one
  //반드시 하나의 루트 엘리먼트를 가진다.
  //element 중첩 허용 안함
  //시작태그와 종료태그가 있어야함.
  // <시작 attribut="value"/>
  return (
    <div>
      <h1>hello~</h1>
      {name === "리액트" ? <h1>{name}입니다</h1> : <h2>{name} 아닙니다</h2>}

      <h1>{name === "리액트" && name + "입니다"}</h1>
      <font size={size}>fontsize</font>
    </div>
  );
}

export default App;

//새로운 js 파일을 만들어서 임포트해도되고.
/* JSX는 html(text) + es6(변수,로직)*/
{
  /* jsx주석*/
}
