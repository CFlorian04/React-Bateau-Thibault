import { SafeAreaView, View, Text, StyleSheet} from "react-native"

import Background from "../../modèles/background";
import Title from "../../modèles/title";
import Liens from "../../modèles/liens";
import Row from "../../modèles/row";
import Col from "../../modèles/col";
import TouchButton from "../../modèles/touchButton";
import { useNavigation } from "@react-navigation/native";


const Recettes = () => {
  const navigation = useNavigation();

      return (
            <View style={styles.main_container}>
                <Background>
                    <Title text="Nos recettes"/>

                    <SafeAreaView style={styles.child_container}>
                        <Text style={styles.subtitle}> Toutes les recettes du bateau de Thibault</Text>
                        <Liens/>
                    </SafeAreaView>

                    <SafeAreaView style={styles.child_container}>

                        <Row>
                            <Col numRows={1}>
                                <TouchButton onPress={() => navigation.navigate("homard")} text={"Homard"} image={require("../../../assets/images/homardRecette_icon.png")}/>
                            </Col>

                            <Col numRows={1}>
                                <TouchButton onPress={() => navigation.navigate("stjacques")} text={"St Jacques"} image={require("../../../assets/images/saintJacques_icon.png")}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col numRows={1}>
                                <TouchButton onPress={() => navigation.navigate("barroti")} text={"Bar"} image={require("../../../assets/images/barRecette_icon.png")}/>
                            </Col>

                            <Col numRows={1}>
                                <TouchButton onPress={() => navigation.navigate("tourteau")} text={"Tourteau"} image={require("../../../assets/images/poulpe.png")}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col numRows={1}>
                                <TouchButton onPress={() => navigation.navigate("recette_vide")} text={"Recette"} image={require("../../../assets/images/poulpe.png")}/>
                            </Col>

                            <Col numRows={1}>
                                <TouchButton onPress={() => navigation.navigate("recette_vide")} text={"Recette"} image={require("../../../assets/images/poulpe.png")}/>
                            </Col>
                        </Row>

                    </SafeAreaView>

                </Background>
            </View>
        )
    }

export default Recettes;

const styles = StyleSheet.create({  
    main_container: {
        flex: 1,
    },
    child_container: {
        flex: 1,
    },
    subtitle: {
        textAlign: 'center'
    }
  
  });