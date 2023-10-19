import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestPartun from "../screens/Vue3/vue3";
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainerStack;


