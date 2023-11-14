import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView, ActivityIndicator, TouchableOpacity, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../redux/pokemonSlice';
import PokemonCard from '../components/PokemonCard';

export default function PokemonsList ({ navigation }) {
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const renderLoading = () => (
    <ActivityIndicator size="large" color="#2a75bb" style={styles.loadingIndicator} />
  );

  return (   
    <SafeAreaView style={styles.container} >
      {pokemons.length === 0 ? (
        renderLoading()
      ) : (
          <FlatList
              data={pokemons}
              numColumns={2}
              renderItem={(pokemon) => (
                <PokemonCard 
                  pokemon={pokemon}
                  navigation={navigation}/> 
              )}
              keyExtractor={(item) => item.mainData.name}
          />
    )}
      </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingIndicator: {
    marginTop: 30,
  },
});
