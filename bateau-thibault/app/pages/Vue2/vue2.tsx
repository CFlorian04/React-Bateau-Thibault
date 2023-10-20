import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./vue2.style";

import Liens from "../../modèles/liens";
import Background from "../../modèles/background";
import TouchButton from "../../modèles/touchButton";
import Col from "../../modèles/col";
import Row from "../../modèles/row";

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
        <SafeAreaView style={styles.child_container}>
                <View style={styles.buttons_container}>
                  <Row>
                      <Col numRows={2}>
                        <TouchButton onPress={() => navigation.navigate("vue20")} text="De La Brise" image={require("../../../assets/images/DeLaBrise_icon.png")}/>
                      </Col>
                      <Col numRows={2}>
                        <TouchButton onPress={() => navigation.navigate("vue21")} text="Saphir" image={require("../../../assets/images/Saphir_icon.png")}></TouchButton>
                      </Col>
                  </Row>

                  <Row>
                      <Col numRows={2}>
                        <TouchButton onPress={() => navigation.navigate("vue22")} text="Gast Micher" image={require("../../../assets/images/GastMicher_icon.png")}></TouchButton>
                      </Col>

                      <Col numRows={2}>
                        <TouchButton onPress={() => navigation.navigate("vue23")} text="Aquilon" image={require("../../../assets/images/Aquilon_icon.png")}></TouchButton>
                      </Col>
                  </Row>

                  <Row>
                      <Col numRows={1}>
                      <TouchButton onPress={() => navigation.navigate("contact")} text={"Contact"} image={require("../../../assets/images/ancre.png")}/>
                      </Col>

                      <Col numRows={1}>
                        <TouchButton onPress={() => navigation.navigate("contact")} text={"Contact"} image={require("../../../assets/images/ancre.png")}/>
                      </Col>
                  </Row>
                </View>
            </SafeAreaView>
      </Background>
    );
}
export default MenuBateaux;
