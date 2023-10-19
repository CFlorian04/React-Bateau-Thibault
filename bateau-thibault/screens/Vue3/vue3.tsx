import React, { Component, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./vue3.style";
const RestPartun = () => {
  const navigation = useNavigation();
    return (
      <ImageBackground
        source={require("../../Photo/background3.png")} // Replace with the path to your image
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.text}>Restaurantes partenaires</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text1}>
            Tous les Restaurantes partenaires avec le bateau de Thibault
          </Text>
          <Text style={styles.text2}>06.63.99.99.78</Text>
          <Text style={styles.text3}>labateaudethibault@gamil.com</Text>
          <Text style={styles.text4}>www.facebook.com/labateaudethibault</Text>
        </View>
        <View style={styles.View_Butth}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.Butt_BistGas}
              onPress={() => navigation.navigate("vue30")}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>Bistrot des Gascons</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Butt_BistGas2}
              onPress={() => navigation.navigate("vue31")}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>Les fous de l'ile</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", top: 10 }}>
            <TouchableOpacity
              style={styles.Butt_BistGas}
              onPress={() => navigation.navigate("vue32")}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>Bistrot Landais</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Butt_BistGas2}
              onPress={() => navigation.navigate("vue33")}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>Villa 9-Trois</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", top: 20 }}>
            <TouchableOpacity
              style={styles.Butt_BistGas}
              onPress={() => navigation.navigate("vue34")}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>Bistrot du Sommelier</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("vue1")}
              style={styles.Butt_BistGas2}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>Devenez partenaire!</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
}
export default RestPartun;
