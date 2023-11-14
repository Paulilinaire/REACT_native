// import { useDispatch } from 'react-redux'
// import { fetchPokemons } from '../pokemonSlice'
// import { useEffect, useState} from 'react'


// export default function PokemonDisplay({navigation, route}) {
//     const pokemonId = route.params.pokemonId
//     const dispatch = useDispatch();
//     const [pokemon, setPokemon] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await dispatch(fetchPokemons(pokemonId.id));
//                 setPokemon(response.payload)
//             } catch (error) {
//                 console.error("Une erreur s'est produite :", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return ( 
//         <View>
//         {
//             pokemon &&
//             <View>
//                 <Text>{pokemon.name}</Text>
//                 <Image source={{uri : pokemon.sprites.front_default}}/>
//             </View>
//         }  
//         </View>
//      )

// }
