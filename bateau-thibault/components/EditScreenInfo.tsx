import React from 'react';
import { Button, Linking, StyleSheet, ImageBackground } from 'react-native';

import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
          >
          Vente en direct de notre bateau{"\n"}
          Produits selon la saison, Livraisons sur Paris{"\n"}
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)"
          >
          <Text onPress={() => Linking.openURL("tel:+330663999978")}>Téléphone</Text>
          <Text onPress={() => Linking.openURL("https://www.facebook.com/lebateaudethibault")}>Facebook</Text>
          <Text onPress={() => Linking.openURL("mailto:lebateaudethibault@gmail.com")}>Contact</Text>
        </View>

        <SafeAreaView style={styles.container}>
          <View style={styles.fixToText}>
            <Button 
              onPress={() => console.log("Clicked")}
              title="Produits et promotions"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              title="Bateaux"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              title="Restaurants"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              title="Recettes"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              title="Contact"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </SafeAreaView>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    marginHorizontal: 16,
    borderColor: 'red',
    borderWidth: 3,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
