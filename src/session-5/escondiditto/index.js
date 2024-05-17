export default function encontraditto(pokemons) {
  for (let i = 0; i <= pokemons.length; i++) {
    if (pokemons[i] === pokemons[i - 1] && pokemons[i] === pokemons[i + 1]) {
      return i;
    }
  }
  return "No encontramos a ditto";
}
