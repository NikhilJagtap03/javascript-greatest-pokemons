// Iteration 1: All Fire Pokemons - get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
  return pokemons.filter((pokemon) => pokemon.type.includes("Fire"));
}

// Iteration 2: Shortest Pokemon - find the `name` of the shortest pokemon
const shortestPokemon = (pokemons) => {
  if (pokemons.length === 0) return 0;
  return pokemons.reduce((shortest, current) => {
    return parseFloat(current.height) < parseFloat(shortest.height)
      ? current
      : shortest;
  }).name;
};

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
const candyAverage = (pokemons) => {
  if (pokemons.length === 0) return 0;
  const totalCandy = pokemons.reduce((sum, pokemon) => {
    return sum + (pokemon.candy_count || 0);
  }, 0);
  return parseFloat((totalCandy / pokemons.length).toFixed(2));
};

// Iteration 4: images for the first 10 `Ground` Pokemons
function getGroundPokeImg(pokemons) {
  if (pokemons.length === 0) return 0;
  const groundPokemons = pokemons.filter((pokemon) =>
    pokemon.type.includes("Ground")
  );
  return groundPokemons.slice(0, 10).map((pokemon) => pokemon.img);
};

// Iteration 5: Find all pokemon names heavier than Pikachu
const getHeavyPokemons = (pokemons) => {
  if (pokemons.length === 0) return 0;
  const pikachuWeight = parseFloat(
    pokemons.find((pokemon) => pokemon.name === "Pikachu").weight
  );
  return pokemons
    .filter((pokemon) => parseFloat(pokemon.weight) > pikachuWeight)
    .map((pokemon) => pokemon.name);
};

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
const orderAlphabetically = (pokemons) => {
  if (pokemons.length === 0) return [];
  const sorted = pokemons.map((pokemon) => pokemon.name).sort();
  return sorted.slice(0, 20);
};

// Iteration 7: Strong pokemons - return an array of first 15 pokemons that have just one `weakness`
const strongPokemons = (pokemons) => {
  const strong = pokemons.filter((pokemon) => pokemon.weaknesses.length === 1);
  return strong.slice(0, 15).map((pokemon) => pokemon.name);
};
