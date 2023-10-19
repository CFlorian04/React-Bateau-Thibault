import React, { Component, useEffect } from "react";
import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Bateau_thiab.style";
const Bateau_thiab = () => {
  return (
    <ImageBackground
      source={require("../../Photo/background3.png")} // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Le bateau de Thibautt</Text>
      </View>
      <View style={styles.View_Image}>
        <Image style={styles.img} source={require("../../Photo/TIG.png")} />
      </View>
      <View style={styles.view3}>
        <Text style={styles.text1}>06.63.99.99.78</Text>
        <Text style={styles.text11}>labateaudethibault@gamil.com</Text>
        <Text style={styles.text12}>www.facebook.com/labateaudethibault</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text1}>XXX YYY ZZZ</Text>
        <Text style={styles.text2}>Qu'il est chaus le soeil</Text>
        <Text style={styles.text3}>Quand nous sommes en vacances</Text>
        <Text style={styles.text4}>Y a d'la joie,des hironéelles</Text>
        <Text style={styles.text5}>C'est le sud de la France</Text>
        <Text style={styles.text6}>Ppa bricole au garage</Text>
        <Text style={styles.text7}>Maman est dans la chaise longue</Text>
        <Text style={styles.text8}>Dans ce joli paysage</Text>
        <Text style={styles.text9}>Moi,je me balade en tongs</Text>
        <Text style={styles.text10}>Que de bonheur!</Text>
        <Text style={styles.text10}>Que de bonheur!</Text>
      </View>
    </ImageBackground>
  );
};
export default Bateau_thiab;
