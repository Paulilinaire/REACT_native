import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { fetchPokemon } from '../redux/pokemonSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function PokemonCard(props) {
  const [pokemon, setPokemon] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await dispatch(fetchPokemon(props.index));
            setPokemon(response.payload)
        } catch (error) {
            console.error("Une erreur s'est produite :", error);
        }
    };

    fetchData();
}, []);

  // Check if pokemon is still loading or not available
  if (!pokemon) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
    { pokemon &&
    <TouchableOpacity
      onPress={() => navigation.navigate('PokemonDetails')}
      style={[styles.card, { backgroundColor: '#c7a008' }]}>
      <Image source={{uri : pokemon.sprites.front_default}}/>
      <Text style={styles.text}>{props.pokemon.name}</Text>
    </TouchableOpacity>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    margin: 10,
    width: 150,
    height: 100,
  },
  text: {
    color: "black"
  },
});
