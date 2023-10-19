import { View, Text, StyleSheet } from "react-native";


const Poème = () => {
    return (
        <View style={styles.bottomView}>
        <Text style={styles.poème}>
          Qu'il est chaud le soeil{"\n"}
          Quand nous sommes en vacances{"\n"}
          Y a d'la joie, des hirondelles{"\n"}
          C'est le sud de la France{"\n"}
          Papa bricole au garage{"\n"}
          Maman est dans la chaise longue{"\n"}
          Dans ce joli paysage{"\n"}
          Moi, je me balade en tongs{"\n"}
          Que de bonheur!{"\n"}
          Que de bonheur!{"\n"}
        </Text>
      </View>
    )
};

export default Poème;

export const styles = StyleSheet.create({

    poème: {
      marginVertical: 50,
      fontSize: 16,
      color: "#000000",
      fontWeight: "300",
      fontStyle: "italic",
      textAlign: 'center',
    },
  
    bottomView: {
      flexDirection: "column",
    },
});