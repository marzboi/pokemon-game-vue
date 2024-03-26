const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));

  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonOptions = () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  getPokemonName(mixedPokemons.splice(0, 4));
};

const getPokemonName = ([a, b, c, d] = []) => {
  console.log(a, b, c, d);
};

export default getPokemonOptions;
