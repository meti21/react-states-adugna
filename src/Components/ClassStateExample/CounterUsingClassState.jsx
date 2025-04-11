import React, { Component } from "react";

class CounterUsingClassState extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }

  //if we use function declaration instead of function expression(with arrow function),we have to do the binding by ourself.but using function expression with arrow handle the binding by itself
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count: {this.state.count}</button>
      </div>
    );
  }
}

export default CounterUsingClassState;
