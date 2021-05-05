import React from 'react';
import BookCard from './../BookCard';
import SearchBar from './../SearchBar';

const BookList = () => {
  const [data, setData] = React.useState({books: []});
  const [workingData, setWorkingData] = React.useState({books: []})

  React.useEffect(() => {
    const fetchBooks = () => {
      fetch("https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json")
        .then(response => response.json())
        .then((response) => {
          console.log(response.books);
          setData({books: response.books[0]});
          setWorkingData({books: response.books[0]});
        })
    };
    fetchBooks();
  }, []);

  const setBookFav = (book_id, status) => {
    data.books[book_id].isFav = status;
  };

  const setBookReadingStatus = (book_id, status) => {
    data.books[book_id].read = status;
  };

  const searchBook = (book_to_search) => {
    let foundBook = false;
    data.books.forEach(book => {
      if(book.title === book_to_search) {
        foundBook = true;
        setWorkingData({books: [book]})
      }
    });
    if(foundBook === false) {
      setWorkingData({books: data.books})
    };
  };

  return (
    <div>
      <div>
        <SearchBar searchBook={searchBook}/>
      </div>
      <div className="row">
        {workingData.books.map((book, index) => {
          return (
          <BookCard data={book} key={index} id={index} setFav={setBookFav} setReadStatus={setBookReadingStatus}/>
        )}
      )}
      </div>
    </div>
  )
};

export default BookList;
