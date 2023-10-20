import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./vue3.style";

import Liens from "../../modèles/liens";
import Background from "../../modèles/background";
import Title from "../../modèles/title";
import Row from "../../modèles/row";
import Col from "../../modèles/col";
import TouchButton from "../../modèles/touchButton";


const RestPartun = () => {
  const navigation = useNavigation();
    return (
      <View style={styles.main_container}>
        <Background>
            <Title text="Restaurants partenaires"></Title>

          <SafeAreaView style={styles.child_container}>
            <Text style={styles.subtitle}>
              Tous les Restaurants partenaires avec le bateau de Thibault
            </Text>
            <Liens></Liens>
          </SafeAreaView>

          <SafeAreaView style={styles.child_container}>
            <View style={styles.buttonsContainer}>
              <Row>
                <Col numRows={1}>
                  <TouchButton onPress={() => navigation.navigate("vue30")} text={"Bistrot des Gascons"}/>
                </Col>

                <Col numRows={1}>
                  <TouchButton onPress={() => navigation.navigate("vue31")} text={"Les fous de l'île"}/>
                </Col>
              </Row>

              <Row>
                <Col numRows={1}>
                  <TouchButton onPress={() => navigation.navigate("vue32")} text={"Bistrot Landais"}/>
                </Col>

                <Col numRows={1}>
                  <TouchButton onPress={() => navigation.navigate("vue33")} text={"Villa 9-Trois"}/>
                </Col>
              </Row>

              <Row>
                <Col numRows={1}>
                  <TouchButton onPress={() => navigation.navigate("vue34")} text={"Bistrot du Sommelier"}/>
                </Col>

                <Col numRows={1}>
                  <TouchButton onPress={() => navigation.navigate("contact")} text={"Devenez partenaire!"}/>
                </Col>
              </Row>
            </View>

          </SafeAreaView>
        </Background>
      </View>
    );
}
export default RestPartun;
