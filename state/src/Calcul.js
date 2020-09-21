import React, { Component } from "react";

class Calcul extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operator: "?",
      result: 0,
    };
  }

  render() {
    const { operator, result } = this.state;

    return (
      <div>
        <h1>
          20 {operator} 10 = {result}
        </h1>
        <button
          onClick={() => {
            this.setState({ operator: "+", result: 20 + 10 });
          }}
        >
          ADD
        </button>
        &nbsp;
        <button
          onClick={() => {
            this.setState({ operator: "-", result: 20 - 10 });
          }}
        >
          SUBSTRACT
        </button>
        &nbsp;
        <button
          onClick={() => {
            this.setState({ operator: "*", result: 20 * 10 });
          }}
        >
          MULTIPLY
        </button>
        &nbsp;
        <button
          onClick={() => {
            this.setState({ operator: "/", result: 20 / 10 });
          }}
        >
          DIVIDE
        </button>
      </div>
    );
  }
}

export default Calcul;
