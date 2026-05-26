import { StyleSheet, Text, View } from "react-native";

export default function Emblema({ categoria }) {
    return (
        <View style={styles.emblema}>
            <Text style={styles.texto}>{categoria}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    emblema: {
        backgroundColor: '#2d2d2d',
        paddingVertical: 3,
        paddingHorizontal: 10,
        BorderRadius: 20,
        alignSelf: 'flex-start',
        marginTop: 6,
    }
})