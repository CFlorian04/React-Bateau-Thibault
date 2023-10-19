import React, { Component, useEffect } from "react";
import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Fous_lile.style";
import Poème from "../../modèles/poème";


const Fous_lile = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/background3.png")} // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Les fous de l'ile</Text>
      </View>
      <View style={styles.View_Image}>
        <Image
          style={styles.img}
          source={require("../../../assets/images/fousDeLIle.png")}
        />
      </View>
      <Poème></Poème>
    </ImageBackground>
  );
};
export default Fous_lile;
