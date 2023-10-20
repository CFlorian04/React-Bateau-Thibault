import { SafeAreaView, View, Text, StyleSheet} from "react-native"

import Background from "../../modèles/background";
import Title from "../../modèles/title";
import Restaurant from "../../modèles/restaurant";

const Homard = () => {

      return (
            <View style={styles.main_container}>
                <Background>
                    <SafeAreaView style={styles.child_container}>
                        <Restaurant 
                        title="Homard en chaud-froid"
                        source={require("")}>

                        </Restaurant>

                    </SafeAreaView>

                    <SafeAreaView style={styles.child_container}>

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
        borderWidth: 1,
    },
    subtitle: {
        textAlign: 'center'
    }
  
  });