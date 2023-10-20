import { SafeAreaView, View, Text, StyleSheet} from "react-native"

import Background from "../../modèles/background";
import Title from "../../modèles/title";


const BarRoti = () => {

      return (
            <View style={styles.main_container}>
                <Background>
                    <Title text="Bar rôti au laurier frais"/>
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
        textAlign: 'center'
    }
  
  });