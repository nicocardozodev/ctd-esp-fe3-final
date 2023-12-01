import React, { useState, useContext } from "react";
import { MyContext } from '../Context';

const Form = () => {
  const { state, dispatch } = useContext(MyContext);
  const { theme, data } = state;
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const emailRegex = /\S+@\S+\.\S+/;
  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreValido = nombre.trim().length >= 5 && !nombre.startsWith(' ');
    const emailValido = emailRegex.test(email);

    if (nombreValido && emailValido) {
      setEnviado(true);
      setError(false);
      console.log('Nombre:', nombre);
      console.log('Email:', email);
      
    } else {
      setEnviado(false);
      setError(true);
    }
  };

  return (
    <div>
    <div className={`form-container`}>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>

{enviado && <p className="success-message">Gracias {nombre}, te contactaremos cuando antes vía mail</p>}
{error && <p className="error-message">Por favor verifique su información nuevamente</p>}
</div>
  );
};

export default Form;
