import React, { Component, useEffect } from "react";
import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Bistrot_Gascons.style";
import Poème from "../../modèles/poème";

const Bistrot_Gascons = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/background3.png")} // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Bistrot des Gascons</Text>
      </View>
      <View style={styles.View_Image}>
        <Image
          style={styles.img}
          source={require("../../../assets/images/desGascons.png")}
        />
      </View>
      
      <Poème></Poème>
    </ImageBackground>
  );
};
export default Bistrot_Gascons;
