import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class YearDropdown extends Component {
  state = { isOpen: false };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { items, currentItem, onItemSelect } = this.props;
    return (
      <DropdownButton
        bsPrefix="list-group-item col"
        id="dropdown-basic-button"
        title={currentItem.name}
      >
        {items.map((listItem) => {
          return (
            <Dropdown.Item
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
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    );
  }
}

export default YearDropdown;
