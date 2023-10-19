import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestPartun from "../screens/Vue3/vue3";
import Bistrot_Gascons from "../screens/vue30/Bistrot_Gascons";
import Fous_lile from "../screens/vue31/Fous_lile";
import Bist_Londs from "../screens/vue32/Bist_Londs";
import Vill_Trois from "../screens/vue33/Vill_Trois";
import Bist_Somm from "../screens/vue34/Bist_Somm";
import Bateau_thiab from "../screens/vue1/Bateau_thiab";
const Stack = createNativeStackNavigator();
const NavigationContainerStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="vue3" component={RestPartun} />
        <Stack.Screen name="vue1" component={Bateau_thiab} />
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


