import { SafeAreaView, View, Text, StyleSheet} from "react-native"
import { useNavigation } from "@react-navigation/native";
import Liens from "../../modèles/liens";
import Background from "../../modèles/background";
import Row from "../../modèles/row";
import Col from "../../modèles/col";
import Title from "../../modèles/title";
import TouchButton from "../../modèles/touchButton";


const Produits = () => {

  const navigation = useNavigation();

    return (
        <View style={styles.main_container}>
            <Background>
                <Title text="Choisissez vos produits"/>

                <Row>
                    <Col numRows={2}>
                        <TouchButton text="Cocquillages" onPress={() => console.log("None")} image={require("../../../assets/images/poulpe.png")}/>
                        <TouchButton text="Crustacés" onPress={() => console.log("None")} image={require("../../../assets/images/poulpe.png")}/>
                        <TouchButton text="Poissons" onPress={() => console.log("None")} image={require("../../../assets/images/poulpe.png")}/>
                        <TouchButton text="Promotions" onPress={() => console.log("None")} image={require("../../../assets/images/poulpe.png")}/>
                    </Col>

                </Row>
            </Background>
        </View>
    )
}

export default Produits;


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
  