export async function fetchPokes() {
  const response = await fetch("https://unpkg.com/pokemons");
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  const pokemons = result.results.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.nationalnumber,
    imgSrc: pokemon.sprites.normal,
    link: `#${pokemon.name.tolowercase}`,
  }));
  return pokemons;
}
