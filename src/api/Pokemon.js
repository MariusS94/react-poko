export async function fetchPokes() {
  const response = await fetch("https://unpkg.com/pokemons");
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  const pokemons = result.results.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: pokemon.sprites.normal,
  }));

  const uniquePokemons = pokemons.filter(
    (pokemon, index) =>
      pokemons.findIndex((other) => other.id === pokemon.id) === index
  );
  return uniquePokemons;
}

export async function fetchPokemon(pokemonName) {
  const respond = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  if (!respond.ok) {
    throw new Error(respond);
  }
  const result = await respond.json();
  const pokemon = {
    name: result.name,
    id: result.id,
    /* imgSrc: result.sprites.front_deafault, */
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${result.name}.gif`,
    hp: result.stats[0]?.base_stat,
    attack: result.stats[1]?.base_stat,
    defense: result.stats[2]?.base_stat,
  };
  return pokemon;
}
