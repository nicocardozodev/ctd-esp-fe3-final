import React from "react";

const Card = ({ name, username, id, onClick, onAddToFav }) => {

  const addFav = (e) => {
    e.stopPropagation(); 
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const newFav = { name, username, id };
    const isFavExists = favs.some(fav => fav.id === id);
    
    if (!isFavExists) {
      favs.push(newFav);
      localStorage.setItem('favs', JSON.stringify(favs));
      onAddToFav(newFav); 
      alert('Este dentista ya está en tus favoritos.');
    }
  };

  return (
    <div className="card" onClick={() => onClick?.(id)}>
        <img src="/images/doctor.jpg" alt="Doctor" className="card-image"/>
        <div className="card-info">
            <h3>{name}</h3>
            <p>{username}</p>
        </div>
        <button onClick={addFav} className="favButton">
          <img src="/images/star.png" alt="Agregar a Favoritos" className="star-icon"/>
        </button>
    </div>
  );
};

export default Card;
