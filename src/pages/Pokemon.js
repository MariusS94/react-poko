import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchPokemon } from "../api/pokemon";
import LoadingScreen from "../components/LoadingScreen";
import "./Pokemon.css";
function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const fetchedPokemon = await fetchPokemon(name);
        setPokemon(fetchedPokemon);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [name]);

  if (error) {
    return <div>ERROR!!!</div>;
  }
  if (loading || !pokemon) {
    return <LoadingScreen />;
  }
  return (
    <div className="pokemon">
      <header className="pokemon__header">
        <button className="pokemon__close" onClick={() => history.goBack()}>
          <svg height="24" viewBox="0 0 24 24" width="24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
        <h2 className="pokemon__title">{pokemon.name}</h2>
      </header>
      <div className="pokemon__body">
        <img
          className="pokemon__image"
          src={pokemon.imgSrc}
          alt={pokemon.name}
        />
        <div>HP: {pokemon.hp}</div>
        <div>Attack: {pokemon.attack}</div>
        <div>Defense: {pokemon.defense}</div>
      </div>
    </div>
  );
}

export default Pokemon;
