import React from "react";
import "../containers/App.css";

//use destructuring for variables
const Card = ({ mass, name, birth_year }) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${mass}${birth_year}?set=set1`}
        alt="robot headshot"
      />
      <div>
        <h2>{name}</h2>
        <p>Birth year: {birth_year}</p>
      </div>
    </div>
  );
};

export default Card;
