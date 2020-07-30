import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import History from "./history";
import Output from "./output";
import Keyboard from "./keyboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "clear") {
      this.reset();
    } else if (button === "backspace") {
      this.backspace();
    } else {
      let lastChar = this.state.output.slice(this.state.output.length - 1);
      // eslint-disable-next-line no-unused-expressions
      lastChar === "%" && button === "%"
        ? ""
        : lastChar === "-" && button === "-"
        ? ""
        : lastChar === "+" && button === "+"
        ? ""
        : this.setState({
            output: this.state.output + button,
          });
    }
  };

  calculate() {
    try {
      this.setState({
        // eslint-disable-next-line no-eval
        output: (eval(this.state.output) || "") + "",
      });
    } catch (error) {
      this.setState({
        output: "error",
      });
    }
  }

  reset() {
    this.setState({
      output: "",
    });
  }

  backspace() {
    this.setState({
      output: this.state.output.slice(0, -1),
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="calculator">
            <div id="result">
              <History />
              <Output output={this.state.output} />
            </div>
            <Keyboard onClick={this.onClick} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
