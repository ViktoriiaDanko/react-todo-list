import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    const SearchText = 'Type here to search';
    return  (
      <input className='form-control search-input' placeholder={SearchText}/>
      )
  };

  export default SearchPanel;