import React, { useEffect, useState } from "react";
import "../App.css";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemIcon from "../components/ListItemIcon";

import ListItemText from "../components/ListItemText";
import { fetchPokes } from "../api/Pokemon";
import LoadingScreen from "../components/LoadingScreen";
import SearchInput from "../components/SearchInput";

function Pokemons() {
  const [pokemons, setPokemons] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const allPokemons = await fetchPokes();
      setPokemons(allPokemons);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading || pokemons === null) {
    return <LoadingScreen />;
  }
  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().startsWith(query.toLowerCase());
  });

  return (
    <>
      <header className="app__header">
        Pokedexs
        <SearchInput
          value={query}
          onChange={(value) => setQuery(value)}
          placeholder="Enter name"
          className="header__input"
        />
      </header>
      <main className="app__main">
        <List>
          {filteredPokemons?.map((pokemon) => (
            <ListItem
              key={pokemon.id}
              href={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
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
