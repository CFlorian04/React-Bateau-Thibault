import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import { SetStateAction, useState } from "react";
import Background from "./background";
import Title from "./title";
import Liens from "./liens";
import Row from "./row";
import Col from "./col";
import TouchButton from "./touchButton";
import { useNavigation } from "@react-navigation/native";

const MenuPageComponent = (props : any, changePage: (arg0: any) => void) => {

    const navigation = useNavigation();
    const pageInformation = props.pageInformation;

    const isEven = pageInformation.buttonArray.length%2 == 0;

    console.log(pageInformation.buttonArray);
    console.log(isEven);

    return (
        <View style={styles.main_container}>
          <Background>

            <SafeAreaView style={styles.child_container}>
                <Title text={pageInformation.titre}></Title>
                
                <SafeAreaView style={styles.quarter}>
                  <Text style={styles.getStartedText}> {pageInformation.description} </Text>
                  <Liens></Liens>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={styles.child_container}>
                <View style={styles.buttons_container}>
                    { pageInformation.buttonArray.map((item: any, i: number) => 
                    (
                        <Row key={i}>
                            <Col numRows={2}>
                                <TouchButton onPress={() => changePage(item.index)} text={item.name} image={item.image} />
                            </Col>
                        </Row>
                    ))
                    }
                </View>
            </SafeAreaView>

          </Background>
        </View>
    )
}

export default MenuPageComponent;

export const styles = StyleSheet.create({
    // toute la page
    main_container: {
        flex: 1,
    },


    child_container: {
        flex: 1,
    },

    quarter: {
        flex: 1,      
        paddingVertical: 50,
    },

    // begin testing
    buttons_container: {
        flex: 2,
        marginHorizontal: 20,
    },
    // end testing

    title: {
        fontFamily: 'Satisfy',
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        paddingVertical: 50,
    },

    links: {
        color: 'black',
        textAlign: 'center'
    },

    image: {
        flex: 1,
        justifyContent: 'center',
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