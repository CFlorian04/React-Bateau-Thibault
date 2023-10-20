import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";

const Restaurant = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </View>
            
            <SafeAreaView style={styles.imageContainer}>
                <View style={styles.View_Image}>
                    <Image  style={styles.img}
                    source={props.source}
                    />
                </View>
            </SafeAreaView>

        </SafeAreaView>


    );
  };
  export default Restaurant;
  
  export const styles = StyleSheet.create({

    img: {
      width: 550,
      height: 320,
    },

    imageContainer: {

    },

    View_Image: {
        flexDirection: 'row',
        justifyContent: 'center',
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