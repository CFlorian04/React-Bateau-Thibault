import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Button, SafeAreaView, Linking} from 'react-native';


const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require("./assets/background.png")} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Le bateau de Thibault</Text>
      
      <Text style={styles.getStartedText}>
          Vente en direct de notre bateau{"\n"}
          Produits selon la saison, Livraisons sur Paris{"\n"}
      </Text>

      <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <Text style={styles.links} onPress={() => Linking.openURL("tel:+330663999978")}>Téléphone</Text>
        <Text style={styles.links} onPress={() => Linking.openURL("https://www.facebook.com/lebateaudethibault")}>Facebook</Text>
        <Text style={styles.links} onPress={() => Linking.openURL("mailto:lebateaudethibault@gmail.com")}>Contact</Text>
      </View>

      <SafeAreaView style={styles.container}>
        <View style={styles.fixToText}>
          <Button onPress={() => console.log("Clicked")} title="Produits et promotions" color="#2d2a2a42"/>
          <Button title="Bateaux" color="#2d2a2a42"/>
          <Button title="Restaurants" color="#2d2a2a42"/>
          <Button title="Recettes" color="#2d2a2a42"/>
          <Button title="Contact" color="#2d2a2a42"/>
        </View>
      </SafeAreaView>

    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontFamily: 'Satisfy',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },

  links: {
    color: 'black',
    textAlign: 'center'
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },

  // Test uniquement
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },

  // Grid test
  fixToText: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },

  homeScreenFilename: {
    marginVertical: 7,
  },
  
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default App;