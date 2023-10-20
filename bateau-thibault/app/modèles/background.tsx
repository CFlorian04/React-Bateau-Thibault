import { ImageBackground, StyleSheet } from "react-native";




const Background = ({children}) => {
    return (
        <ImageBackground
        source={require("../../assets/images/background3.png")}
        style={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    )
}

export default Background;


export const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
    },
})