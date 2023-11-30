import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../Context';


const Detail = () => {
  let { id } = useParams();
  const [dentist, setDentist] = useState();
  const {theme} = useContext(MyContext); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
      .then(response => response.json())
      .then(data => setDentist(data))
  }, [id]);

  return (
    <div className={`detail-container ${theme}`}> 
     {dentist && (
        <>
          <h1>Detail Dentist {dentist.id}</h1>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{dentist.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{dentist.email}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{dentist.phone}</td>
                </tr>
                <tr>
                  <th>Website</th>
                  <td>{dentist.website}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;