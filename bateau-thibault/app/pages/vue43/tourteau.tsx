import { SafeAreaView, View, Text, StyleSheet} from "react-native"

import Background from "../../modèles/background";
import Title from "../../modèles/title";


const Tourteau = () => {

      return (
            <View style={styles.main_container}>
                <Background>
                    <Title text="Le tourteau du chef"/>
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
        textAlign: 'center'
    }
  
  });