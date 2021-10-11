import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = { 
        label: ''
    };

    onLableChange = (oEvent) => {
        this.setState({ 
            label: oEvent.target.value
        });
    };

    onSubmit = (oEvent) => {
        oEvent.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState ({ 
            label: ''
        });
    };

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
               
                <input type="text" className="form-control"
                       onChange={ this.onLableChange }
                       placeholder="What needs to be done" 
                       value={this.state.label}/>
                <button type="submit" className="btn btn-outline-secondary">Add</button>
            </form>
        )
    }
}