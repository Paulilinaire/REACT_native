import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../components/PokemonCard'

export default function PokemonsList() {
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  console.log("pokemons:", pokemons); 

  return (
    <View>
      {pokemons.map((pokemon, key) => (
        <PokemonCard
          pokemon={pokemon}
          key={key}
          index={pokemons.indexOf(pokemon) + 1}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({})