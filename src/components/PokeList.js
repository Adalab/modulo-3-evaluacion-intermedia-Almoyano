import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const pokeItems = props.list.map((item, index) => {
    return (
      <li key={index}>
        <Pokemon item={item} />
      </li>
    );
  });

  return (
    <>
      <ul>{pokeItems}</ul>
    </>
  );
};

export default PokeList;
