import React from "react";
//text property and value property are string that represent fields on passed in items, element[valueProperty] is equivalent to element.valueProperty
const ListGroup = ({
  items,
  selectedItem,
  onItemSelect,
  textProperty,
  valueProperty,
}) => {
  return (
    <ul className="list-group">
      {items.map((element) => {
        return (
          <li
            onClick={() => onItemSelect(element)}
            key={
              element[valueProperty]
                ? element[valueProperty]
                : element[textProperty]
            }
            className={
              element[textProperty] === selectedItem[textProperty]
                ? "list-group-item-primary active"
                : "list-group-item-primary"
            }
          >
            {element[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
