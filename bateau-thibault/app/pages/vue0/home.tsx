import { SafeAreaView, View, Text, StyleSheet} from "react-native"
import { useNavigation } from "@react-navigation/native";
import Liens from "../../modèles/liens";
import Background from "../../modèles/background";
import Row from "../../modèles/row";
import Col from "../../modèles/col";
import Title from "../../modèles/title";
import TouchButton from "../../modèles/touchButton";


const HomePage = () => {

  const navigation = useNavigation();

    return (
        <View style={styles.main_container}>
          <Background>

            <SafeAreaView style={styles.child_container}>
                <Title text="Le bateau de Thibault"></Title>
                
                <SafeAreaView style={styles.quarter}>
                  <Text style={styles.getStartedText}>
                      Vente en direct de notre bateau{"\n"}
                      Produits selon la saison, Livraisons sur Paris{"\n"}
                  </Text>
                  <Liens></Liens>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={styles.child_container}>
                <View style={styles.buttons_container}>
                  <Row>
                      <Col numRows={2}>
                        <TouchButton onPress={() => console.log("None")} text="Produits et promotions"/>
                      </Col>
                  </Row>

                  <Row>
                      <Col numRows={2}>
                        <TouchButton onPress={() => console.log("None")} text="Bateaux"></TouchButton>
                      </Col>

                      <Col numRows={2}>
                        <TouchButton onPress={() => navigation.navigate("vue3")} text="Restaurants"></TouchButton>
                      </Col>
                  </Row>

                  <Row>
                      <Col numRows={1}>
                        <TouchButton onPress={() => navigation.navigate("recettes")} text="Recettes"></TouchButton>
                      </Col>

                      <Col numRows={1}>
                        <TouchButton onPress={() => navigation.navigate("contact")} text={"Contact"}/>
                      </Col>
                  </Row>
                </View>
            </SafeAreaView>

          </Background>
        </View>
    )
}


    const styles = StyleSheet.create({
        // toute la page
        main_container: {
          flex: 1,
        },
      
      
        child_container: {
          flex: 1,
        },
      
        quarter: {
          flex: 1,      
          paddingVertical: 50,
        },
      
        // begin testing
        buttons_container: {
          flex: 2,
          marginHorizontal: 20,
        },
        // end testing
      
        title: {
          fontFamily: 'Satisfy',
          fontSize: 24,
          textAlign: 'center',
          color: 'white',
          paddingVertical: 50,
        },
      
        links: {
          color: 'black',
          textAlign: 'center'
        },
      
        image: {
          flex: 1,
          justifyContent: 'center',
        },
        codeHighlightContainer: {
          borderRadius: 3,
          paddingHorizontal: 4,
        },
      
        homeScreenFilename: {
          marginVertical: 7,
        },
        
        getStartedText: {
          fontSize: 17,
          lineHeight: 24,
          textAlign: 'center',
        },
      });
      
      export default HomePage;