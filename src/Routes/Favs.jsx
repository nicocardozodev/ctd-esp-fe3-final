import React from "react";
import Card from "../Components/Card";
import { useNavigate } from 'react-router-dom'

const Favs = () => {
  let navigate = useNavigate();

  const favs = JSON.parse(localStorage.getItem('favs')) || [];

  const onCardClick = (id) => {
    navigate('/dentista/' + id);
  }

  const handleAddToFav = (dentist) => {
    alert(`Agregaste ${dentist.name} a tus favoritos`);
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      {favs.length > 0 && <div className='card-grid'>
        {favs.map(dentist => 
          <Card 
            key={dentist.id} 
            name={dentist.name} 
            username={dentist.username} 
            id={dentist.id} 
            onClick={onCardClick} 
            onAddToFav={handleAddToFav} 
          />
        )}
      </div>}
    </>
  );
};

export default Favs;

