import React, { Component } from "react";
import NavBar from "./components/common/navbar";
import Counters from "./components/practice/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  constructor(props) {
    super();
    //this.state = props
  }

  componentDidMount() {
    //you can make ajax calls here and do setstate
  }

  handleDelete = (counterId) => {
    const newcounters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: newcounters });
  };

  handleReset = () => {
    const newcounters = [...this.state.counters];
    newcounters.map((counter) => (counter.value = 0));
    this.setState({ counters: newcounters });
  };

  handleIncrement = (counter) => {
    const newcounters = [...this.state.counters];
    const index = newcounters.indexOf(counter);
    newcounters[index] = { ...counter };
    newcounters[index].value++;
    this.setState({ counters: newcounters });
  };

  handleDecrement = (counter) => {
    const newcounters = [...this.state.counters];
    const index = newcounters.indexOf(counter);
    newcounters[index] = { ...counter };
    newcounters[index].value--;
    this.setState({ counters: newcounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          counters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
