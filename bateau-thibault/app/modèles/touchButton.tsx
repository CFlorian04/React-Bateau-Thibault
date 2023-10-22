import { Pressable, Text, StyleSheet, View, Image } from "react-native"


const TouchButton = ({onPress, text, image}) => {

    return (
        < Pressable onPress={onPress} style={styles.pressable}>
          { image !== undefined || image !== null ? <Image style={styles.img} source={image}/> : null}
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
      alignContent : 'center',
      flexDirection: 'row',
    },

    pressable_text: {
      color: 'white',
      textAlign: 'center',
      alignContent : 'center',
      flex : 1,
      fontSize: 16,
      top : 12
    },

    img: {
      width: 50,
      height: 50,
    },
    View_Image: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });


