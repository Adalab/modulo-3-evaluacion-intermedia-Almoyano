import React from "react";

const Pokemon = (props) => {
  console.log(props);
  return (
    <article>
      <h2>{props.item.name}</h2>
      <img src={props.item.url} alt={props.item.name} />
    </article>
  );
};

export default Pokemon;
