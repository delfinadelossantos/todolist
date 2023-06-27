import React, { useState } from "react";

const Title = (props) => {
  //Guardo en un estado local el input del usuario
  const [input, setInput] = useState();

  //Guardo en un estado local el nombre del usuario
  const [user, setUser] = useState();

  //Seteo el input de acuerdo a lo que recibe mientras escribe el usuario
  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const clickHandler = (event) => {
    setUser(input);
  };

  return (
    <>
      <h1>{user}'s To-Do List</h1>
      {!user && (
        <div>
          <input
            name="input"
            type="text"
            placeholder="Type your name..."
            onChange={changeHandler}
          />
          {/* Muestro el input que ingresa el user */}
          <p>{input}</p>
          <button onClick={clickHandler}>Submit Name</button>
        </div>
      )}
    </>
  );
};

export default Title;
