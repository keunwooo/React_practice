import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: true, displayData: "" };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  //첫번째 방법 바인드 하기
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  //두번쨰 방법 바인드 안하면 람다
  handleClick = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };
  ///////////////////////////////////
  handleChange(e) {
    this.setState({
      displayData: e.target.value,
    });
  }

  handleButton() {
    alert(this.state.displayData);

    this.setState({
      displayData: "",
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "on" : "off"}
        </button>
        <br></br>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.displayData}
          onChange={this.handleChange}
        ></input>

        <button onClick={this.handleButton}>{this.state.displayData}</button>
        <h2>{this.state.displayData}</h2>
      </div>
    );
  }
}

export default Toggle;
