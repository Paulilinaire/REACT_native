import { useState } from "react";
import { Button, SafeAreaView, Image, TextInput, StyleSheet, View } from "react-native";
import MyModal from "./components/MyModal";

export default function App(){

    const [textInput, setTextInput] = useState('');
    const [visibleModal, setVisibleModal] = useState(false);
    const [groceries, setGroceries] = useState([]);

    function getInput(enteredText){
        setTextInput(enteredText)
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
            <Image style={styles.logo} source={require('./assets/cart.png')}/>
            <TextInput style={styles.input} onChangeText={getInput} value={textInput} placeholder="Ajouter votre article" />
            <View style={styles.view}>
                <Button color="royalblue" onPress={addItem} title="ajouter"></Button> 
            </View>
            <MyModal groceries={groceries} isVisible={visibleModal} closeModal={closeModal}></MyModal>
        </SafeAreaView>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ecf0f1',
        padding: 10,
    },
    logo: {
        justifyContent:'center',
        height: 200,
        width: 200,
      },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
});