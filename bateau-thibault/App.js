import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/background.png")} style={styles.background}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: 'auto',
  },
  background: {
    left: 0,
    top: 0,
    flex: 1,
    width: 'auto',
    height: 'auto',
    borderWidth: 5,
    borderColor: '#FF0000',
    borderStyle: 'solid',
  }
});
