import { View, TextInput, StyleSheet } from "react-native";

function Input({ children }) {
    return (
        <View>
            <TextInput 
              style={styles.textinput}
              placeholder={children}
              placeholderTextColor="white"
            ></TextInput>
        </View>
    )
}

styles = StyleSheet.create({
    textinput: {
        textAlign: 'center',
        borderWidth: 3,
        borderRadius: 15,
        fontSize: 15,
        borderColor: 'black',
        color: 'white',
        width: 200,
        margin: 10,
    },
})
export default Input