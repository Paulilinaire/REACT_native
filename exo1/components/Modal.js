import { FlatList, Modal, View, Button, StyleSheet, SafeAreaView } from "react-native"

export default function MyModal(props) {
    
    return(
        <Modal visible={props.isVisible}>
            <SafeAreaView style={styles.container}>
                <Button title="ajouter article" onPress={props.closeModal}></Button>
                <FlatList data={props.groceries} renderItem={(itemData) => {
                    return (
                        <View>
                            <Text style={styles.text}>{itemData.item}</Text>
                        </View>
                    )
                }} keyExtractor={(item, index) => {
                    return item
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
        alignItems:'center',
        backgroundColor: '#ecf0f1',
        padding: 10
    },
    text : {
        color: "black",
    }
})
