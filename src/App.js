import { Component } from "react";
import "./App.css";

class App extends Component {
  // Properties
  state = {
    fullName: "Tan Khoa",
    address: "Da Nang",
    counter: 0,
    isDisplayed: false,
  };

  // Function methods

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  setDisplayed = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed,
    });
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.fullName}</h1>
        {this.state.isDisplayed && <h2>Tôi sống ở: {this.state.address}</h2>}
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Icrease Counter</button>
        <button onClick={this.decrementCounter}>Decrease Counter</button>
        <button onClick={this.setDisplayed}>Set Display</button>
      </div>
    );
  }
}

export default App;
