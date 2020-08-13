import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";

import ListItemText from "./components/ListItemText";

const bulbasaur = {
  name: "Bulbasaur",
  imgSrc: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
  id: "001",
  link: "#bulbasaur",
};
const ivysaur = {
  name: "Ivysaur",
  imgSrc: "https://img.pokemondb.net/artwork/large/ivysaur.jpg",
  id: "002",
  link: "#ivysaur",
};
const pokemons = [bulbasaur, ivysaur];

function App() {
  return (
    <div className="app">
      <header className="app__header">
        Pokedexs
        <input placeholder="Search" className="header__input" />
      </header>
      <main className="app__main">
        <List>
          {pokemons.map((pokemon) => (
            <ListItem key={pokemon.id} href={pokemon.link}>
              <ListItemIcon image={pokemon.imgSrc} />
              <ListItemText
                primary={pokemon.name}
                secondary={`#${pokemon.id}`}
              />
              <ListItemIcon image="https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fire.svg" />
            </ListItem>
          ))}
        </List>
      </main>
      <footer className="app__footer">Placeholder</footer>
    </div>
  );
}

export default App;
