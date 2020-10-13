import React, { Component } from "react";

class SortBy extends Component {
  state = {};

  raiseSort = (path) => {
    const currentSortOption = { ...this.props.selectedSortOption };

    if (currentSortOption.path === path) {
      currentSortOption.order =
        currentSortOption.order === "asc" ? "desc" : "asc";
    } else {
      currentSortOption.path = path;
      currentSortOption.order = "asc";
    }
    this.props.onSort(currentSortOption);
  };

  renderSortIcon = (option) => {
    const { selectedSortOption } = this.props;
    if (option.path !== selectedSortOption.path) return null;
    if (selectedSortOption.order === "asc")
      return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    const {
      sortOptions,
      textProperty,
      selectedSortOption,
      className,
    } = this.props;
    return (
      <div className={{ className } + " container"}>
        <div className="row">
          {sortOptions.map((option) => {
            return (
              <button
                key={option[textProperty]}
                onClick={() => this.raiseSort(option[textProperty])}
                className={
                  selectedSortOption[textProperty] === option[textProperty]
                    ? "list-group-item col clickable active"
                    : "list-group-item col clickable"
                }
              >
                {option[textProperty]} {this.renderSortIcon(option)}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

SortBy.defaultProps = {
  textProperty: "path",
};

export default SortBy;
