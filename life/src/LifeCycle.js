import React, { Component } from "react";

class lifeCycle extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getderivedfromprops");
    if (nextProps.color !== prevState.color) {
      return {
        color: nextProps.color,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentdidmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldcomponentupdate", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentwillunmount");
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getsnapshotbeforeupdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentdidupdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트전 ㅅㄱ상", snapshot);
    }
  }

  render() {
    console.log("render");
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default lifeCycle;
