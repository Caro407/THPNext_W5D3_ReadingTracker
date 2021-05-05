import React from 'react';

const SearchBar = (props) => {
  const [searchedBook, setSearch] = React.useState('');

  const preventDefaultBehaviour = (event) => {
    event.preventDefault();
  }

  const searchBook = (book) => {
    let value = document.getElementById('search-bar').value;
    console.log(value);
    setSearch(value);
    props.searchBook(value)
  };

  return (
    <div>
      <form onSubmit={preventDefaultBehaviour}>
        <label>
          Searched Book :
          <input type="text" name="name" id="search-bar" onChange={searchBook} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default SearchBar;
