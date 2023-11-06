import { useState } from "react";
import { Button, SafeAreaView, Image, TextInput, StyleSheet } from "react-native";
import MyModal from "./Modal";


export default function ShoppingList(){

    const [textInput, setTextInput] = useState('');
    const [visibleModal, setVisibleModal] = useState(false);
    const [groceries, setGroceries] = useState([]);

    function getInput(enterText){
        setTextInput(enterText)
    };

    function addItem(){
        setGroceries([...groceries, textInput])
        setVisibleModal(true)
        console.log(groceries);
    };

    function closeModal(){
        setVisibleModal(false)
    }


    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../assets/cart.png')}/>
            <TextInput onChangeText={getInput} value={textInput} placeholder="Ajouter votre article" />
            <Button onPress={addItem} title="ajouter"></Button>
            <Button color="red" title="annuler"></Button>
            <MyModal isVisible={visibleModal} closeModal={closeModal}></MyModal>
        </SafeAreaView>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ecf0f1',
        padding: 10
    },
    logo: {
        justifyContent:'center',
        height: 200,
        width: 200,
      },
});