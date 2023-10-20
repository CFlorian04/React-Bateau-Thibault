import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./vue2.style";

import Liens from "../../modèles/liens";
import Background from "../../modèles/background";

          {/* Todo Corriger la feuille de style de cette page */}

const MenuBateaux = () => {
  const navigation = useNavigation();
    return (
      <Background swipeIndex={"vue0"}>
        <View style={styles.container}>
          <Text style={styles.text}>Nos bateaux partenaires</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text1}>
            Tous les eaux mènent à Thibault
          </Text>

          <Liens></Liens>

        </View>
        <View style={styles.View_Butth}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.Butt_BistGas}
              onPress={() => navigation.navigate("vue20")}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>De La Brise</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Butt_BistGas2}
              onPress={() => navigation.navigate("vue21")}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>Saphir</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", top: 10 }}>
            <TouchableOpacity
              style={styles.Butt_BistGas}
              onPress={() => navigation.navigate("vue22")}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>Gast Micher</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Butt_BistGas2}
              onPress={() => navigation.navigate("vue23")}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>Aquilon</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", top: 20 }}>
            <TouchableOpacity
              style={styles.Butt_BistGas}
              onPress={() => navigation.navigate("contact")}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>Contact</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("contact")}
              style={styles.Butt_BistGas2}
            >
              <View style={styles.view_text_Button}>
                <Text style={styles.text_Button}>Contact</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Background>
    );
}
export default MenuBateaux;
