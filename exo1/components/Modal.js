import { FlatList, Modal, View, Button, StyleSheet } from "react-native"

export default function MyModal(props) {
    
    return(
        <Modal visible={props.isVisible}>
            <View>
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
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    text : {
        color: "black",
    }
})
