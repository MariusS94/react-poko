import React, { useEffect, useState } from "react";
import "../App.css";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemIcon from "../components/ListItemIcon";
import loading from "../assets/loading.svg";

import ListItemText from "../components/ListItemText";
import { fetchPokes } from "../api/Pokemon";

function waitFor(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function Pokemons() {
  const [pokemons, setPokemons] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await waitFor(2000);
      const allPokemons = await fetchPokes();
      setIsLoaded(true);
      setPokemons(allPokemons);
    }
    fetchData();
  }, []);

  if (!isLoaded) {
    return <img src={loading} alt="loading spinner" />;
  }

  return (
    <>
      <header className="app__header">
        Pokedexs
        <input placeholder="Search" className="header__input" />
      </header>
      <main className="app__main">
        <List>
          {pokemons?.map((pokemon) => (
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
    </>
  );
}
export default Pokemons;
