import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Button, SafeAreaView, Linking} from 'react-native';


const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

const Col = ({ numRows, children }) => {
  return  (
    <View style={styles[`${numRows}col`]}>{children}</View>
  )
}

const App = () => (
  <View style={styles.main_container}>
    <ImageBackground source={require("./assets/background.png")} resizeMode="cover" style={styles.image}>

      <SafeAreaView style={styles.child_container}>
        <Text style={styles.title}>Le bateau de Thibault</Text>
        
        <SafeAreaView style={styles.quarter}>
          <Text style={styles.getStartedText}>
              Vente en direct de notre bateau{"\n"}
              Produits selon la saison, Livraisons sur Paris{"\n"}
          </Text>
          <Text style={styles.links} onPress={() => Linking.openURL("tel:+330663999978")}>Téléphone</Text>
          <Text style={styles.links} onPress={() => Linking.openURL("https://www.facebook.com/lebateaudethibault")}>Facebook</Text>
          <Text style={styles.links} onPress={() => Linking.openURL("mailto:lebateaudethibault@gmail.com")}>Contact</Text>
        </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style={styles.child_container}>
        <View style={styles.buttons_container}>
          <Row>
            <Col numRows={2}>
              <Button onPress={() => console.log("Clicked")} title="Produits et promotions" color="#2d2a2a42"/>
            </Col>
          </Row>

          <Row>
            <Col numRows={2}>
              <Button title="Bateaux" color="#2d2a2a42"/>
            </Col>

            <Col numRows={2}>
              <Button title="Restaurants" color="#2d2a2a42"/>
            </Col>
          </Row>

          <Row>
            <Col numRows={1}>
              <Button title="Recettes" color="#2d2a2a42"/>
            </Col>
            <Col numRows={1}>
              <Button title="Contact" color="#2d2a2a42"/>
            </Col>
          </Row>
        </View>
      </SafeAreaView>

    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  // toute la page
  main_container: {
    flex: 1,
    // delete
    // borderColor: 'red',
    // borderWidth: 3,
    // borderStyle: 'solid',
  },


  child_container: {
    // delete
    flex: 1,
    // borderColor: 'blue',
    // borderWidth: 3,
    // borderStyle: 'solid',
  },

  quarter: {
    flex: 1,

    // borderColor: 'green',
    // borderWidth: 3,
    // borderStyle: 'solid',

    paddingVertical: 50,
  },

  // begin testing
  buttons_container: {
    flex: 2,
    marginHorizontal: 20,
  },

  row: {
    flexDirection: 'row',
  },

  "1col": {
    flex: 1,
  },

  "2col": {
    flex: 2,
  },

  // end testing

  title: {
    fontFamily: 'Satisfy',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 50,

    // borderColor: 'purple',
    // borderWidth: 3,
    // borderStyle: 'solid',
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
  // text: {
  //   color: 'white',
  //   fontSize: 42,
  //   lineHeight: 84,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   backgroundColor: '#000000c0',
  // },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },

  homeScreenFilename: {
    marginVertical: 7,
  },
  
  getStartedText: {
    // flex: 1,
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default App;