import { SafeAreaView, View, Text, StyleSheet} from "react-native"

import Background from "../../modèles/background";
import Présentation from "../../modèles/présentation";

const Homard = () => {

      return (
            <View style={styles.main_container}>
                <Background>
                    <SafeAreaView style={styles.child_container}>
                        <Présentation 
                        title="Homard en chaud-froid"
                        source={require("../../../assets/images/homardRecette.png")}>
                        </Présentation>
                    </SafeAreaView>

                    <SafeAreaView style={styles.child_container}>
                        <Text style={styles.description}>Faites cuire le homard dans de l'au bouillante, du thym, du laurier, du sel et du poivre de cayenne.{"\n"}
                            Laissez cuire 20 minutes. Egouttez-les et laissez-les refroidir.{"\n"}{"\n"}
                            Découpez les coffres des homards dans le sens de la longueur.{"\n"}{"\n"}
                            Mélangez la mayonnaise avec le cognac, le corail et la ciboulette ciselée.
                        </Text>
                    </SafeAreaView>
                </Background>
            </View>
        )
    }

export default Homard;

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