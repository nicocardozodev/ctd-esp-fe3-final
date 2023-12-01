import React from "react";

const Card = ({ name, username, id, onClick, favorite = true }) => {

  const handleAddToFav = (dentist, added) => {
    if (added) {
    alert(`Agregaste ${dentist.name} a tus favoritos`);
    } else { 
      alert('Este dentista ya esta en tus favoritos');
    }
  } 


  const addFav = (e) => {
    e.stopPropagation(); 
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const newFav = { name, username, id };
    const isFavExists = favs.some(fav => fav.id === id);
    
    if (!isFavExists) {
      favs.push(newFav);
      localStorage.setItem('favs', JSON.stringify(favs));
    }
    handleAddToFav(newFav, !isFavExists); 
  };

  return (
    <div className="card" onClick={() => onClick?.(id)}>
        <img src="/images/doctor.jpg" alt="Doctor" className="card-image"/>
        <div className="card-info">
            <h3>{name}</h3>
            <p>{username}</p>
        </div>
        {favorite && <button onClick={addFav} className="favButton">
          <img src="/images/star.png" alt="Agregar a Favoritos" className="star-icon"/>
        </button>}
    </div>
  );
};

export default Card;
