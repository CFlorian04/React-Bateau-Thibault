import { SafeAreaView, View, Text, StyleSheet} from "react-native"

import Background from "../../modèles/background";
import Présentation from "../../modèles/présentation";
import Poème from "../../modèles/poème";


const Tourteau = () => {

      return (
        <View style={styles.main_container}>
        <Background>
            <SafeAreaView style={styles.child_container}>
                <Présentation 
                title="Tourteau linguine"
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

export default Tourteau;

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