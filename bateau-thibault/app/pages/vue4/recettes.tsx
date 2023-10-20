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
                                <TouchButton onPress={() => navigation.navigate("homard")} text={"Homard"}/>
                            </Col>

                            <Col numRows={1}>
                                <TouchButton onPress={() => navigation.navigate("stjacques")} text={"St Jacques"}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col numRows={1}>
                                <TouchButton onPress={() => navigation.navigate("barroti")} text={"Bar"}/>
                            </Col>

                            <Col numRows={1}>
                                <TouchButton onPress={() => navigation.navigate("tourteau")} text={"Tourteau"}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col numRows={1}>
                                <TouchButton onPress={() => navigation.navigate("recette_vide")} text={"Recette"}/>
                            </Col>

                            <Col numRows={1}>
                                <TouchButton onPress={() => navigation.navigate("recette_vide")} text={"Recette"}/>
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