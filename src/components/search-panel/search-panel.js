import React, { Component } from 'react';
import './search-panel.css';


export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchChange = (oEvent) => {
    const term = oEvent.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  
  render() {
    const SearchText = 'Type here to search';
      return  (
        <input  
            className='form-control search-input' 
            placeholder={SearchText}
            type='text'
            value={this.state.term}
            onChange={this.onSearchChange}
            />
      )
    };
}