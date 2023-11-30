import React from "react";


const Card = ({ name, username, id, onClick }) => {

  const addFav = ()=>{
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const newFav = { name, username, id };
    const isFavExists = favs.some(fav => fav.id === id);
    if (!isFavExists) {
      favs.push(newFav);
      localStorage.setItem('favs', JSON.stringify(favs));
    }
  }

  return (
    <div className="card">
        <img src="/images/doctor.jpg" alt="Doctor" className="card-image" onClick={() => onClick?.(id) }/>
        <div className="card-info" onClick={() => onClick?.(id) }>
            <h3>{name}</h3>
            <p>{username}</p>
        </div>
        <button onClick={addFav} className="favButton">
          <img src="/images/star.png" alt="Add to Favorites" className="star-icon"/>
        </button>
    </div>
  );
};

export default Card;
