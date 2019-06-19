import React from 'react';

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
    <div className="card-body">
      <form className="form-inline my-2 my-lg-0">
        <div className="row">
          <div className="col-auto">
            <span className="input-group-append">
              <button className="btn btn-outline-secondary border-left-0 border" type="button">
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
          <div className="col">
            <input type="search" placeholder="Search" onBlur={handleSubmit} onKeyPress={handleEnterKeyPress} className="form-control py-2 border-right-0 border mr-sm-2" />
          </div>
        </div>
    </form>
  </div>
  );
}

export default SearchBar;