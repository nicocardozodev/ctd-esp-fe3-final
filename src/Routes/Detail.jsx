import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../Context';

const Detail = () => {
  let { id } = useParams();
  const [dentist, setDentist] = useState();
  const { state, dispatch } = useContext(MyContext);
  const { theme, data } = state;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data));
  }, [id]);

  const dentistDetail = useMemo(() => {
    if (!dentist) return null;

    return (
      < >
        <h1>Detail Dentist {dentist.id}</h1>
        <div className={`table-container`}>
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
    );
  }, [dentist]); 

  return <main className={`detail-container ${theme}`}>{dentistDetail}</main>;
};

export default Detail;