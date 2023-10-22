import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../app/pages/home";



const Stack = createNativeStackNavigator();
const NavigationContainerStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen name="vue0" component={HomePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainerStack;


