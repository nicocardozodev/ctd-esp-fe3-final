import React from "react";
import Card from "../Components/Card";
import { useNavigate } from 'react-router-dom'

const Favs = () => {

  let navigate = useNavigate();

  const favs = JSON.parse(localStorage.getItem('favs')) || [];

  const onCardClick = (id) => {
    navigate('/dentista/' + id);
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      {favs && <div className='card-grid'>
        {favs.map(dentist => <Card name={dentist.name} username={dentist.username} id={dentist.id} onClick={onCardClick} />) }
      </div>}
    </>
  );
};

export default Favs;
