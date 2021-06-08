import React from "react";
import PokeList from "./PokeList";
import data from "../data/PokemonArray.json";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">Mi lista de pokemon</h1>
        <PokeList list={data} />
      </>
    );
  }
}

export default App;
