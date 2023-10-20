import { SafeAreaView, View, Text, Button, StyleSheet} from "react-native"
import { useNavigation } from "@react-navigation/native";
import Liens from "../../modèles/liens";
import Background from "../../modèles/background";

const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )
  
  const Col = ({ numRows, children }) => {
    return  (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
  }


const HomePage = () => {

  const navigation = useNavigation();

    return (
        <View style={styles.main_container}>
          <Background>

            <SafeAreaView style={styles.child_container}>
                <Text style={styles.title}>Le bateau de Thibault</Text>
                
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
                    <Button title="Produits et promotions" color="#2d2a2a42"/>
                    </Col>
                </Row>

                <Row>
                    <Col numRows={2}>
                    <Button title="Bateaux" color="#2d2a2a42"/>
                    </Col>

                    <Col numRows={2}>
                    <Button onPress={() => navigation.navigate("vue3")} title="Restaurants" color="#2d2a2a42"/>
                    </Col>
                </Row>

                <Row>
                    <Col numRows={1}>
                    <Button title="Recettes" color="#2d2a2a42"/>
                    </Col>
                    <Col numRows={1}>
                    <Button onPress={() => navigation.navigate("contact")} title="Contact" color="#2d2a2a42"/>
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
      
        row: {
          flexDirection: 'row',
        },
      
        "1col": {
          flex: 1,
        },
      
        "2col": {
          flex: 2,
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