import React, { useContext, useEffect } from 'react';
import { MyContext } from '../Context';
import Card from '../Components/Card'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate();
  const { state, dispatch } = useContext(MyContext);
  const { theme, data } = state;

  const onCardClick = (id) => {
    navigate('/dentista/' + id);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_DATA', payload: data }));
  }, [dispatch]);

  return (
    <main className={`${theme}`} >
      <h1>Home</h1>
      {data && <div className='card-grid'>
        {data.map(dentist => <Card name={dentist.name} username={dentist.username} id={dentist.id} onClick={onCardClick} />) }
      </div>}
    </main>
  )
}

export default Home