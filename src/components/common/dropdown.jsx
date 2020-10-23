import React, { Component } from "react";
import { createPopper } from "@popperjs/core";

class Dropdown extends Component {
  state = { isOpen: false };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { items, currentItem, onItemSelect } = this.props;
    return (
      <div>
        <button
          className="ml-4 list-group-item clickable"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={this.handleClick}
        >
          {currentItem.name}
          {this.state.isOpen ? (
            <i className="m-1 fa fa-sort-asc" />
          ) : (
            <i className="m-1 fa fa-sort-desc" />
          )}
        </button>
        {this.state.isOpen ? (
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {items.map((listItem) => {
              return (
                <li
                  onClick={() => {
                    onItemSelect(listItem);
                  }}
                  className={
                    currentItem.name === listItem.name
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  {listItem.name}
                </li>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
