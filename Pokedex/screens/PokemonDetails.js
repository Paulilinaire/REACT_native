import { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useDispatch } from "react-redux";
import { fetchPokemons } from "../redux/pokemonSlice";

export default function PokemonDetails({ navigation, route }) {
  const pokemonId = route.params.pokemonId;
  const pokemon = route.params.pokemon;
  const dispatch = useDispatch()
  console.log("pokemon detail: ", pokemonId);


  return (
    <View>
      {pokemon && (
        <View>
          <Text>{pokemon.name}</Text>
          <Image source={{ uri: pokemon.sprites.front_default }} />
        </View>
      )}
    </View>
  );
}
