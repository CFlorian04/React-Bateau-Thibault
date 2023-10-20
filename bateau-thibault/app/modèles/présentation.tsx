import { View, Text, Image, SafeAreaView, StyleSheet, Dimensions } from "react-native";

const Restaurant = (props) => {
    return (
        <SafeAreaView style={styles.full_component}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </View>
            
            <SafeAreaView style={styles.imageContainer}>
                <View style={styles.View_Image}>
                    <Image  style={styles.img}
                    source={props.source}
                    resizeMode="contain"
                    />
                </View>
            </SafeAreaView>

        </SafeAreaView>


    );
  };
  export default Restaurant;
  
  export const styles = StyleSheet.create({
    full_component: {
      flex: 1,
    },

    img: {
      flex: 1,
      width: "100%",
      height: "100%",
    },

    imageContainer: {
      flex: 1,
    },

    View_Image: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      },

      text: {
        fontSize: 32,
        color: "white",
        fontWeight: "500",
        fontStyle: "italic",
        textAlign: 'center'
      },

      container: {
        flex: 1,
        // top: 80,
        // left: 55,
      },
  });