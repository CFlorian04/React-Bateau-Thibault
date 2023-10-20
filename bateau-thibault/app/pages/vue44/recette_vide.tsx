import { SafeAreaView, View, Text, StyleSheet} from "react-native"

import Background from "../../modèles/background";
import Title from "../../modèles/title";
import Présentation from "../../modèles/présentation";
import Poème from "../../modèles/poème";


const RecetteVide = () => {

      return (
        <View style={styles.main_container}>
        <Background>
            <SafeAreaView style={styles.child_container}>
                <Présentation 
                title="Recette XYZ"
                source={require("../../../assets/images/poulpe.png")}>
                </Présentation>
            </SafeAreaView>

            <SafeAreaView style={styles.child_container}>
                <Poème/>
            </SafeAreaView>
        </Background>
    </View>
        )
    }

export default RecetteVide;

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