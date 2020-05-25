import React from 'react';
import './searchBar.scss';

function SearchBar(props) {

  function handleSubmit(event) {
    props.handleChange(event.target.value);
  }

  function handleEnterKeyPress(e) {
    if(e.which === 13){
      e.preventDefault();
      e.target.blur();
    }
    return false;
  }

  return (
    <div className="searchBarContainer">
        <div className="searchBarContainer_bar">
          <input
            type="search"
            placeholder="search"
            onBlur={handleSubmit}
            onKeyPress={handleEnterKeyPress}
            name="search"
            className="home"
          />
          <button type="submit"><i className="fa fa-search"></i></button>
        </div>
    </div>
  );
}

export default SearchBar;