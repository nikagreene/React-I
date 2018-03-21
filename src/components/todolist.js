import React, { Component } from 'react';

class todolist extends Component {
    constructor() {
        super();
        this.state = {
            tdlist: [],
            tdInput: '',
        };
    }


    onChange = (event) => {
        this.setState({tdInput: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({tdInput: '', tdlist:[this.state.tdInput] });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input value={this.state.tdInput} onChange={this.onChange} />
                <list inputvalue={this.state.items} />
                </form>
            </div>
        );
    }
}
