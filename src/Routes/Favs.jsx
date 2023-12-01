import React, { useContext, useEffect } from 'react';
import { MyContext } from '../Context';
import Card from "../Components/Card";
import { useNavigate } from 'react-router-dom'

const Favs = () => {
  let navigate = useNavigate();
  const { state, dispatch } = useContext(MyContext);
  const { theme, data } = state;

  const favs = JSON.parse(localStorage.getItem('favs')) || [];

  const onCardClick = (id) => {
    navigate('/dentista/' + id);
  }

  return (
    <main className={`${theme}`} >
      <h1>Dentists Favs</h1>
      {favs.length > 0 && <div className='card-grid'>
        {favs.map(dentist => 
          <Card 
            key={dentist.id} 
            name={dentist.name} 
            username={dentist.username} 
            id={dentist.id} 
            onClick={onCardClick}
            favorite={false}
          />
        )}
      </div>}
    </main>
  );
};

export default Favs;

