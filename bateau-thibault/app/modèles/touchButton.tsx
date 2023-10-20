import { Pressable, Text, StyleSheet } from "react-native"


const TouchButton = ({onPress, text}) => {

    return (
        < Pressable onPress={onPress} style={styles.pressable}>
            <Text style={styles.pressable_text}>
                {text}
            </Text>
        </Pressable>

    )
}
export default TouchButton;


const styles = StyleSheet.create({
    pressable: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: "#000000",
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      minHeight: 50,
    },

    pressable_text: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
    },
  });


