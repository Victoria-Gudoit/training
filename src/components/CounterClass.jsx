import React from "react";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    this.disincrease = this.disincrease.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  disincrease() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.increase}>+</button>
        <button onClick={this.disincrease}>-</button>
      </div>
    );
  }
}
