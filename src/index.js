import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList'

const App = () => (
  <div className="container">
    <h1>Reading Tracker</h1>
    <BookList />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
