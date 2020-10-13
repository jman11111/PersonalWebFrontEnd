import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  // only executed upon first time creation
  componentDidUpdate(prevProps, prevState) {
    // you can compare previoous state/props to see if you should make ajax call
  }
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>there are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.length === 3 && "there are 3 tags"}
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  // naming conventtion, name  it handle"action"

  render() {
    let classes = this.getClasses();
    return (
      <div className="row">
        <div className="col-1">
          <span className={classes}>{this.formatCount()}</span>
        </div>
        <div className="col">
          {this.props.children}

          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="m-1 btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="m-1 btn btn-secondary btn-sm"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="ml-2 btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getClasses() {
    let classes = "mr-3 btn btn-";
    classes += this.props.counter.value === 0 ? "warning" : "danger";
    return classes;
  }

  formatCount() {
    // jsx expressions are just like javascript objects.
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
