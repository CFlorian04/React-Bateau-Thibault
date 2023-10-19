import React, { Component, useEffect } from "react";
import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Bist_Somm.style";
import Poème from "../../modèles/poème";



const Bist_Somm = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/background3.png")} // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Bistrot du sommelier</Text>
      </View>
      <View style={styles.View_Image}>
        <Image
          style={styles.img}
          source={require("../../../assets/images/duSommelier.png")}
        />
      </View>
      <Poème></Poème>
    </ImageBackground>
  );
};
export default Bist_Somm;
