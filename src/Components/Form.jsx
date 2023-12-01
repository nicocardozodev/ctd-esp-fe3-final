import React, { useState } from "react";

const Form = () => {
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
      // Aquí iría la lógica para enviar los datos a un servidor, por ejemplo.
    } else {
      setEnviado(false);
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {enviado && 'Gracias '+ nombre + ', te contactaremos cuando antes vía mail'}
      {error && <p>Por favor verifique su información nuevamente</p>}
    </div>
  );
};

export default Form;
