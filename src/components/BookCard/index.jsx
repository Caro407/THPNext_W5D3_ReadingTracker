import React from 'react';
import FavButton from './../FavButton'
import ReadingListButton from './../ReadingListButton'

const BookCard = (props) => {
  const changeBookStatus = (status) => {
    props.setFav(props.id, status)
  };

  const changeBookReadStatus = (status) => {
    props.setReadStatus(props.id, status)
  };

    return (
    <div className="card col-6">
      <img src={props.data.thumbnailUrl} className="card-img-top" alt={props.data.title} />
      <div className="card-body">
        <h3 className="card-title">{props.data.title}</h3>
        <p className="card-text">{props.data.shortDescription}</p>
        <FavButton favState={props.data.isFav} favMethod={changeBookStatus}/>
        <ReadingListButton readStatus={props.data.read} setReadStatus={changeBookReadStatus}/>
      </div>
    </div>
  );
};

export default BookCard;
