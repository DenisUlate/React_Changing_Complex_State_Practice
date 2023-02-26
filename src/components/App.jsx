import React, { useState } from "react";

function App() {
  // Definimos el estado inicial de 'contact' como un objeto con tres propiedades
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  // Función que se ejecuta cada vez que el usuario escribe en un campo de entrada
  function handleChange(event) {
    // Extraemos el nombre y el valor del campo de entrada que ha cambiado
    const { name, value } = event.target;
    // Actualizamos el estado de 'contact' con el nuevo valor del campo de entrada
    setContact((prevValue) => {
      return {
        ...prevValue, // Copiamos todas las propiedades del estado anterior de 'contact'
        [name]: value // Actualizamos el valor de la propiedad especificada por 'name'
      };
    });
  }

  // Renderizamos el componente
  return (
    <div className="container">
      {/* Mostramos el nombre y el apellido del usuario en un encabezado */}
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      {/* Mostramos el correo electrónico del usuario en un párrafo */}
      <p>{contact.email}</p>
      {/* Creamos un formulario con tres campos de entrada y un botón */}
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
