import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function botao({ titulo, onPress }) {
    return (

        <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Botao: {
        backgroundColor: '#e50914',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,

    },

    texto: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 14,
    }

})