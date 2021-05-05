import React from 'react';

const ReadingListButton = (props) => {
  const [isBookRead, setFav] = React.useState(props.readStatus)

  const toggleRead = () => {
    if(isBookRead === false) {
      setFav(true);
      props.setReadStatus(isBookRead);
    } else {
      setFav(false);
      props.setReadStatus(isBookRead);
    }
  };

  return (
    <div>
      {(isBookRead === false) ? <button className="btn btn-secondary" onClick={toggleRead}>Ajouter à la liste</button> : <button className="btn btn-secondary" onClick={toggleRead}>Retirer de la liste</button>}
    </div>
  )
};

export default ReadingListButton;
