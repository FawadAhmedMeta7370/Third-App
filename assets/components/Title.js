import { StyleSheet, Text, View } from "react-native";

function Title({ children }) {
    return (
        <View style={styles.center}>
            <Text style={styles.Title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    Title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
        borderWidth: 3,
        borderRadius: 15,
        borderColor: 'black',
        paddingHorizontal: 10,
        marginTop: '5%',
        backgroundColor: '#E6E6E6',
        width: '50%',
    }
})

export default Title