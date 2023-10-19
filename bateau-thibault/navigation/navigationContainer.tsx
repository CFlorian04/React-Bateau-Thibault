import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RestPartun from "../app/pages/Vue3/vue3";
import Bistrot_Gascons from "../app/pages/vue30/Bistrot_Gascons";
import Fous_lile from "../app/pages/vue31/Fous_lile";
import Bist_Londs from "../app/pages/vue32/Bist_Londs";
import Vill_Trois from "../app/pages/vue33/Vill_Trois";
import Bist_Somm from "../app/pages/vue34/Bist_Somm";
import Contact from "../app/pages/vue1/contact";
import HomePage from "../app/pages/vue0/home";
const Stack = createNativeStackNavigator();
const NavigationContainerStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen name="vue0" component={HomePage}/>
        <Stack.Screen name="contact" component={Contact}/>
        <Stack.Screen name="vue3" component={RestPartun} />
        <Stack.Screen name="vue30" component={Bistrot_Gascons} />
        <Stack.Screen name="vue31" component={Fous_lile} />
        <Stack.Screen name="vue32" component={Bist_Londs} />
        <Stack.Screen name="vue33" component={Vill_Trois} />
        <Stack.Screen name="vue34" component={Bist_Somm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainerStack;


