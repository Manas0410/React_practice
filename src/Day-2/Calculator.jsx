import { Component } from "react";

class Calculator extends Component {
  state = {
    num1: "",
    num2: "",
    result: 0,
  };

  handleNumTwoChange = (e) => {
    console.log("handleNumTwoChange called");
    this.setState({ num2: e.target.value });
  };

  handleAddNums = () => {
    const addition = Number(this.state.num1) + +this.state.num2;
    this.setState({ result: addition });
  };

  render() {
    return (
      <>
        <div>
          <input
            type="number"
            placeholder="Enter first number"
            onChange={(e) => this.setState({ num1: e.target.value })}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter second number"
            onChange={this.handleNumTwoChange}
          />
        </div>
        <div>
          <button onClick={this.handleAddNums}>Add Numbers</button>
        </div>
        <p>Result: {this.state.result}</p>
      </>
    );
  }
}
export default Calculator;
