import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./vue3.style";

import Liens from "../../modèles/liens";
import Background from "../../modèles/background";

          {/* Todo Corriger la feuille de style de cette page */}

const RestPartun = () => {
  const navigation = useNavigation();
    return (
      <Background>
        <View style={styles.container}>
          <Text style={styles.text}>Restaurants partenaires</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text1}>
            Tous les Restaurants partenaires avec le bateau de Thibault
          </Text>

          <Liens></Liens>

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
                <Text style={styles.text_Button}>Les fous de l'île</Text>
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
              onPress={() => navigation.navigate("contact")}
              style={styles.Butt_BistGas2}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>Devenez partenaire!</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Background>
    );
}
export default RestPartun;
