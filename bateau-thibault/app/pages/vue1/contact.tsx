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
import Title from "../../modèles/title";


const Contact = () => {
  return (
    <Background>
      <Title text="Le bateau de Thibault"/>

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