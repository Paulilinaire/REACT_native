import { FlatList, Modal, View, Button, StyleSheet, SafeAreaView, Text } from "react-native"

export default function MyModal({isVisible, closeModal, groceries}) {

    const deleteItem = () => {
        const selectedItem = groceries.filter(item => item.id !== id);
        setGroceries(selectedItem)
        }
    
    return(
        <Modal animationType="slide" visible={isVisible}>
            <SafeAreaView style={styles.container}>
                <View style={styles.view}>
                    <Button color="royalblue" title="ajouter article" onPress={closeModal}></Button>
                    <Button color="crimson" title="annuler" onPress={closeModal}></Button>
                </View>
                <FlatList data={groceries} renderItem={(groceries) => {
                    return (
                        <View style={styles.coloredView}>
                            <Text style={styles.text}>{groceries.item}</Text>
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
        padding: 10
    },
    text: {
        fontSize: 15,
        color: "black",
        margin: 5,
    },
    coloredView: {
        marginTop: 10,
        backgroundColor: "whitesmoke",
        borderRadius: 2,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    view: {
        justifyContent:"center",
        flexDirection: "row",
        padding: 5,
    },
})
