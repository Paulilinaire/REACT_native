import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PokemonCard from '../components/PokemonCard';
import { useSelector } from 'react-redux';


export default function PokemonsList() {
  const pokemons = useSelector((state) => state.pokemons.pokemons);

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => <PokemonCard index={index + 1} />}
    />
  );
}

const styles = StyleSheet.create({});
