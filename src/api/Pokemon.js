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
    link: `#${pokemon.name.tolowercase}`,
  }));

  const uniquePokemons = pokemons.filter(
    (pokemon, index) =>
      pokemons.findIndex((other) => other.id === pokemon.id) === index
  );
  return uniquePokemons;
}
