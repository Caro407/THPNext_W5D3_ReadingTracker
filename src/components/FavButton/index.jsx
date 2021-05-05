import React from 'react';

const FavButton = (props) => {
  const [isBookFav, setFavoriteBook] = React.useState(props.favState)

  const toggleFav = () => {
    if(isBookFav === false) {
      setFavoriteBook(true);
      props.favMethod(isBookFav);
    } else {
      setFavoriteBook(false);
      props.favMethod(isBookFav);
    }
  };

  return (
    <div>
      {(isBookFav === false) ? <button className="btn btn-primary" onClick={toggleFav}>Ajouter aux favoris</button> : <button className="btn btn-primary" onClick={toggleFav}>Retirer des favoris</button>}
    </div>
  )
};

export default FavButton;
