import { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";
import TestModal from "./TestModal";

export default function FirstDemo(){

    const [textInput, setTextInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    function getInput(enterText){
        setTextInput(enterText)
        console.log(textInput);
    }

    function consoleMessage(){
        console.log("Presse le bouton !");
        setModalVisible(true)
    }

    function closeModal(){
        console.log("ferme la modal");
        setModalVisible(false)
    }

    const arr = [
        {text: "popo", id: 1},
        {text: "pipo", id: 2},
        {text: "papa", id: 3},
    ]

    return(
            <View style={styles.container}>
                <Text style={[styles.myText, styles.textSize]}>Mon premier composant React Native</Text>
                <TextInput onChangeText={getInput} value={textInput}/>
                <Button color="purple" title="Afficher" onPress={consoleMessage}/>
                <TestModal isVisible={modalVisible} closeModal={closeModal}></TestModal>
                <FlatList data={arr} renderItem={(itemData) => {
                    return (
                        <View>
                            <Text style={styles.myText}>{itemData.item.text} {itemData.item.id}</Text>
                        </View>
                    )
                }} keyExtractor={(item, index) => {
                    return index
                }}
                
                />
                <Image style={styles.logo} source={require('./assets/barbeApapa.png')}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "pink",
        flex: 1,
        padding: 20,
    },
    myText : {
        margin : 8,
        color : "purple",
        fontWeight: "700",
    },
    textSize : {
        fontSize : 32,
    },
    logo: {
        height: 128,
        width: 128,
      },
})

//unité en pixel
//combiner 2 styles : {[styles.myText, styles.textSize]}