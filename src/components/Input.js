import React from "react";

export default class Input extends React.Component {
  state={itemAdd:""};
  handleSubmit (event){
    event.preventDefault();
    this.setState({itemAdd:this.refs.input.value}, function(){
      this.props.item(this.state.itemAdd);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          ref="input"
          placeholder="Enter Item" 
          required
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
