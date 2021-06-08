import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const pokeItems = props.list.map((item) => {
    return (
      <li>
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
