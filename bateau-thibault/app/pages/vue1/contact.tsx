import React from "react";
import  {SafeAreaView} from "react-native"

import {
  Image,
  Text,
  View,
} from "react-native";
import { styles } from "./contact.style";
import Poème from "../../modèles/poème";
import Liens from "../../modèles/liens";
import Background from "../../modèles/background";


const Contact = () => {
  return (
    <Background>
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
    </Background>
  );
};
export default Contact;