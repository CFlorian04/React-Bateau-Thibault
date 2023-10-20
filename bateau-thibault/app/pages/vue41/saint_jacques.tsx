import { SafeAreaView, View, Text, StyleSheet} from "react-native"

import Background from "../../modèles/background";
import Présentation from "../../modèles/présentation";


const SaintJacques = () => {

      return (
        <View style={styles.main_container}>
        <Background>
            <SafeAreaView style={styles.child_container}>
                <Présentation 
                title="Noix de Saint-Jacques flambées en cognac"
                source={require("../../../assets/images/saintJacques.png")}>
                </Présentation>
            </SafeAreaView>

            <SafeAreaView style={styles.child_container}>
                <Text style={styles.description}>
                    Faire fondre du beurre avec des échalotes puis ajouter les noix de Saint-Jacques. 
                    Les faire revenir en faisant le milieu translucide puis les retirer du feu.{"\n"}{"\n"}
                    Ajouter l'ail et le persil dans la poële et laisser cuire quelques secondes. 
                    Bien faire chauffer la poële, puis flamber au Cognac. 
                    Une fois la flamme éteinte, ajouter les noix de Saint-Jacques 
                    (il faut pas flamber car elles perdraient leur saveur).{"\n"}{"\n"}
                    Défuster chaud ou accompagné d'une fondue de poireaux.

                </Text>
            </SafeAreaView>
        </Background>
    </View>
        )
    }

export default SaintJacques;

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