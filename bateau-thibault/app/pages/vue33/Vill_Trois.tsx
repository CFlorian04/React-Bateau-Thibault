import React, { Component, useEffect } from "react";
import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Vill_Trois.style";
import Poème from "../../modèles/poème";



const Vill_Trois = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/background3.png")} // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Villa 9-Trois</Text>
      </View>
      <View style={styles.View_Image}>
        <Image
          style={styles.img}
          source={require("../../../assets/images/villa9Trois.png")}
        />
      </View>
      <Poème></Poème>
    </ImageBackground>
  );
};
export default Vill_Trois;
