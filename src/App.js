import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import { loading } from "./assets/loading.svg";

import ListItemText from "./components/ListItemText";
import { fetchPokes } from "./api/Pokemon";

function waitFor(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  /* const handleClick = async () => {
    const allPokemons = await fetchPokes();
    setPokemons(allPokemons);
  
  }; */

  useEffect(() => {
    async function fetchData() {
      await waitFor(2000);
      const allPokemons = await fetchPokes();
      setIsLoaded(true);
      setPokemons(allPokemons);
    }
    fetchData();
  }, []);

  /* useEffect(() => {
    const timer = setTimeout async () => (
      const allPokemons = await fetchPokes();
      setPokemons(allPokemons);
      
  }, 1000);
    return () => clearTimeout(timer);
}, []); */
  if (!isLoaded) {
    return <img src={loading} alt="loading spinner" />;
  }
  return (
    <div className="app">
      <header className="app__header">
        Pokedexs
        <input placeholder="Search" className="header__input" />
        {/* <button onClick={handleClick}>generate pokemon</button> */}
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
      <footer className="app__footer">Placeholder</footer>
    </div>
  );
}

export default App;
