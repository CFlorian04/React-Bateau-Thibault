import { SafeAreaView, View, Text, StyleSheet} from "react-native"
import Liens from "../modèles/liens";
import Background from "../modèles/background";
import Row from "../modèles/row";
import Col from "../modèles/col";
import Title from "../modèles/title";
import TouchButton from "../modèles/touchButton";
import pageInformation from "../../assets/data/pageInformation.json";
import { useState } from "react";
import Présentation from "../modèles/présentation";

const HomePage = () => {

  const getPageInformation = (indexPage: number) => {
    return pageInformation.filter(x => x.index === indexPage)[0];
  }

  const getImage = (fileName: string) => {
    try {
      return require("../../assets/images/"+fileName);
    }
    catch {
      return null;
    }
  }
  
  const [currentPage, changeCurrentPage] = useState(getPageInformation(0));

  console.log(currentPage);

  return (
    <View style={styles.main_container}>
          {currentPage.pagetype == 0 ? 
            <Background>

              <SafeAreaView style={styles.child_container}>
                  <Title text={currentPage.titre}></Title>
                  
                  <SafeAreaView style={styles.quarter}>
                    <Text style={styles.getStartedText}> {currentPage.description} </Text>
                    <Liens></Liens>
                  </SafeAreaView>
              </SafeAreaView>

              <SafeAreaView style={styles.child_container}>
                  <View style={styles.buttons_container}>
                    { currentPage.buttonArray.map((item: any, i: number) => {
                      if ((currentPage.buttonArray.length%2 == 0 && i%2 == 0) || ((currentPage.buttonArray.length%2 != 0 && i%2 != 0) || i == 0))
                      {
                        console.log(item.image)
                        if (currentPage.buttonArray.length%2 != 0 && i==0)
                        {
                          return (
                            <Row key={i}>
                              <Col numRows={2}>
                                  <TouchButton 
                                    onPress={() => changeCurrentPage(getPageInformation(item.index))} 
                                    text={item.name} 
                                    image={getImage(item.image)} 
                                  />
                              </Col>
                            </Row>
                          )
                        } else
                        {
                            return (
                              <Row key={i}>
                                <Col numRows={1}>
                                  <TouchButton 
                                    onPress={() => changeCurrentPage(getPageInformation(item.index))} 
                                    text={item.name} 
                                    image={getImage(item.image)} 
                                  />
                                </Col>
                                <Col numRows={1}>
                                    <TouchButton 
                                      onPress={() => changeCurrentPage(getPageInformation(currentPage.buttonArray[i+1].index))} 
                                      text={currentPage.buttonArray[i+1].name} 
                                      image={getImage(currentPage.buttonArray[i+1].image)} 
                                    />
                                </Col>
                              </Row>
                            )
                        }
                      }
                    })}
                  </View>
              </SafeAreaView>

            </Background>
          : 
            <Background>
              <Présentation 
                title= {currentPage.titre}
                source={getImage(currentPage.buttonArray[0].image)}
              >
              </Présentation>
              <Text style={styles.poème}>{currentPage.description}</Text>
            </Background>

        }
      </View>
  )
}




const styles = StyleSheet.create({
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
    poème: {
      // Todo: review
      marginVertical: 50,
      fontSize: 16,
      color: "#000000",
      fontWeight: "300",
      fontStyle: "italic",
      textAlign: 'center',
    },
  
    bottomView: {
      flexDirection: "column",
    },
});
  
export default HomePage;