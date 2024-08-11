import React, { useState } from "react";

const Pratiques = () => {
  const [resultat, setResultat] = useState();

  function handleConversion(e) {
    e.preventDefault();
    let temp = parseFloat(e.target.temperature.value);
    let f = temp * 1.8 + 32;
    setResultat(f);
  }
  function handleConversionRealTime(e) {
    let temp = parseFloat(e.target.value);
    let f = temp * 1.8 + 32;
    setResultat(f);
  }

  return (
    <div>
      <form onSubmit={handleConversion}>
        <label htmlFor=""> Temperature en c°</label>
        <input
          onChange={handleConversionRealTime}
          name="temperature"
          type="text"
          className="border-2 rounded px-2"
        />
      </form>
      <div>
        <h1 className="mt-5">Temperature en Fahernieht</h1>
        <p>{resultat}</p>
      </div>
    </div>
  );
};

export default Pratiques;
