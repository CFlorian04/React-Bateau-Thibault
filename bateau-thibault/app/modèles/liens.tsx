import { View, Text, Linking, StyleSheet } from "react-native";

        

const Liens = () => {
    return (
        <View style={styles.linksContainer}>
        <Text style={styles.links} onPress={() => Linking.openURL("tel:+330663999978")}>Téléphone</Text>
        <Text style={styles.links} onPress={() => Linking.openURL("https://www.facebook.com/lebateaudethibault")}>Facebook</Text>
        <Text style={styles.links} onPress={() => Linking.openURL("mailto:lebateaudethibault@gmail.com")}>Contact</Text>
        </View>
    )
};

export default Liens;


export const styles = StyleSheet.create({

    linksContainer: {
        top : 50,
        alignContent : 'center',
        textAlign : 'center',
    },
  
    links: {
      color: 'black',
      textAlign: 'center'
    },
});