import React, { Component } from "react";

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
          className="list-group-item col clickable"
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
          <div>
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
