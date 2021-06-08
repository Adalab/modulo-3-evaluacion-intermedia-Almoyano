import React from "react";

const Pokemon = (props) => {
  const pokeTypes = props.item.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });

  return (
    <article>
      <h2>{props.item.name}</h2>
      <img src={props.item.url} alt={props.item.name} />
      <ul>{pokeTypes}</ul>
      <h3>{props.item.evolution}</h3>
    </article>
  );
};

export default Pokemon;
