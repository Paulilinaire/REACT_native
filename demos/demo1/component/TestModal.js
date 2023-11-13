import { View, Modal, Text, Button, StyleSheet } from "react-native";


export default function TestModal(props){


    return(
        <Modal visible={props.isVisible}>
            <View style={styles.container}>
                <Text style={[styles.myText, styles.textSize]}>Ceci est ma modal react native !!!</Text>
                <Button color="purple" onPress={props.closeModal} title="fermer"></Button>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "white",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    myText : {
        margin: 50,
        color: "purple",
        fontWeight: "400",
    },
    textSize : {
        fontSize: 18,
    },
})