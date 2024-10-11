import { View, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native"
import Fonts from "../../constant/Font"

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOutterContainer}>
            <TouchableOpacity
                onPress = {onPress}
                style={styles.buttonInnerContainer}
                android_ripple={{ color: 'grey' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOutterContainer: {
        borderRadius: 13,
        margin: 5,
        marginTop: '5%',
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'black',
        width: 100,
        alignSelf: 'center'
    },
    buttonInnerContainer: {
        backgroundColor: 'grey',
        elevation: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontSize: 20,
        fontFamily: Fonts.boldfont
    }
})

export default PrimaryButton