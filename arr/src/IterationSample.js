import React, { Component } from "react";

class IterationSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [
        { id: 1, text: "눈사람" },
        { id: 2, text: "얼음" },
        { id: 3, text: "눈" },
        { id: 4, text: "바람" },
      ],
      inputText: "",
      nextId: 5,
    };
  }

  onChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  onClick = () => {
    const { names, nextId, inputText } = this.this.state;
    this.setState({
      names: names.concat({ id: nextId, text: inputText }),
      inputText: "",
      nextId: this.state.nextId + 1,
    });
  };

  onAppend = () => {
    const { names, nextId, inputText } = this.state;
    this.setState({
      names: names.concat({ id: nextId, text: inputText }),
      inputText: "",
      nextId: this.state.nextId + 1,
    });
  };

  onRemove = (id) => {
    const { names } = this.state;
    const nextNames = names.filter((name) => name.id !== id);
    this.setState({
      names: nextNames,
    });
  };

  render() {
    const { names, inputText } = this.state;

    const nameList = names.map((name) => {
      return (
        <div>
          <li key={name.id} onDoubleClick={() => this.onRemove(name.id)}>
            {name.text}
            <button onClick={() => this.onRemove(name.id)}>삭제</button>
          </li>
        </div>
      );
    });

    return (
      <div>
        <input value={inputText} onChange={this.onChange} />
        <button onClick={this.onAppend}>추가</button>
        <ul>{nameList}</ul>
      </div>
    );
  }
}

export default IterationSample;
