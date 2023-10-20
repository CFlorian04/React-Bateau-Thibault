import { SafeAreaView, View, Text, StyleSheet} from "react-native"

import Background from "../../modèles/background";
import Title from "../../modèles/title";


const RecetteVide = () => {

      return (
            <View style={styles.main_container}>
                <Background>
                    <Title text="Recette en cours de création"/>
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