import { SafeAreaView, View, Text, StyleSheet} from "react-native"

import Background from "../../modèles/background";
import Title from "../../modèles/title";
import Présentation from "../../modèles/présentation";


const BarRoti = () => {

      return (
        <View style={styles.main_container}>
        <Background>
            <SafeAreaView style={styles.child_container}>
                <Présentation 
                title="Bar rôti au laurier frais"
                source={require("../../../assets/images/barRecette.png")}>
                </Présentation>
            </SafeAreaView>

            <SafeAreaView style={styles.child_container}>
                <Text style={styles.description}>
                    Sur une plaque ou un plat allant au four, 
                    disposer quelques feuilles de laurier frais, 
                    verser un filet d'huile d'olive et du gros sel. 
                    Disposer le bar, puis l'arroser d'un filet d'huile d'olive et mettre un peu de gros sel sur la peau.{"\n"}{"\n"}
                    Cuire au fou pendant 12 min à 240°C.
                </Text>
            </SafeAreaView>
        </Background>
    </View>
        )
    }

export default BarRoti;

const styles = StyleSheet.create({  
    main_container: {
        flex: 1,
    },
    child_container: {
        flex: 1,
    },
    subtitle: {
        textAlign: 'center',
    },
    description: {
        top: 50,
        textAlign: 'center',
    }
  
  });