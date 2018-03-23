import React from "react";
import { render } from "react-dom";
import Input from "./input";
import List from "./list";

class App extends React.Component {
  state = { itemAddList: [], itemAdd: "" };

  handleItem(item){
    let list=this.state.itemAddList;
    list.push(item);
    this.setState({itemAddList:list});
    console.log("00000");
  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <Input item={this.handleItem.bind(this)} />
        <List list={this.state.itemAddList }/>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
