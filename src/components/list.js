import React from "react";

const List = props => {
  var item = ["Work", "School", "Dinner"];
  var addItem = props.list.map(function(itemList) {
    return <li>{itemList}</li>;
  });
  return <ol>{addItem}</ol>;
};

export default List;
