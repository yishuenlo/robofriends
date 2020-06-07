import React from "react";
import Card from "./Card";
import "../containers/App.css";

const CardList = ({ robots }) => {
  return (
    <div className="cardList">
      {robots.map((user, index) => {
        return (
          <Card
            key={robots[index].mass+robots[index].birth_year}
            mass={robots[index].mass}
            name={robots[index].name}
            birth_year={robots[index].birth_year}
          />
        );
      })}
    </div>
  );
};

export default CardList;
