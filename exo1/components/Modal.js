import { FlatList, Modal, View, Button, StyleSheet, SafeAreaView, Text } from "react-native"

export default function MyModal(props) {
    
    return(
        <Modal visible={props.isVisible}>
            <SafeAreaView style={styles.container}>
                <Button title="ajouter article" onPress={props.closeModal}></Button>
                <FlatList data={props.groceries} renderItem={(groceries) => {
                    return (
                        <View>
                            <View><Text style={styles.text}>{groceries.item}</Text></View>
                        </View>
                    )
                }} keyExtractor={(item, index) => {
                    return index
                }}
                />
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 10
    },
    text : {
        fontSize: 15,
        color: "black",
        margin: 5,
    }
})
