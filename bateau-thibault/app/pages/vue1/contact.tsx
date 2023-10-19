import React from "react";
import  {Linking, SafeAreaView} from "react-native"

import {
  ImageBackground,
  Image,
  Text,
  View,
} from "react-native";
import { styles } from "./contact.style";
import Poème from "../../modèles/poème";
import Liens from "../../modèles/liens";


const Contact = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/background.png")} // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Le bateau de Thibault</Text>
      </View>

      <SafeAreaView style={styles.contactContainer}>
        <View style={styles.View_Image}>
          <Image style={styles.img} source={require("../../../assets/images/TIG.png")} />
        </View>

        <Liens></Liens>
      </SafeAreaView>

      <Poème></Poème>
    </ImageBackground>
  );
};
export default Contact;