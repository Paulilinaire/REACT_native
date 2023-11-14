export default function PokemonDetails({ navigation, route }) {
  const pokemonId = route.params.pokemonId;
  const pokemons = route.params.pokemons;
  console.log("pokemon detail: ", pokemons);

  const selectedPokemon = pokemons.find((pokemon) => pokemon.id === pokemonId);

  return (
    <View>
      {selectedPokemon && (
        <View>
          <Text>{selectedPokemon.name}</Text>
          <Image source={{ uri: selectedPokemon.sprites.front_default }} />
        </View>
      )}
    </View>
  );
}
