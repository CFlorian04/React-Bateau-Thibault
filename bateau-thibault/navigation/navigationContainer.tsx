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
import MenuBateaux from "../app/pages/Vue2/vue2";
import DeLaBrise from "../app/pages/vue20/DeLaBrise";
import Saphir from "../app/pages/vue21/Saphir";
import GastMicher from "../app/pages/vue22/GastMicher";
import Aquilon from "../app/pages/vue23/Aquilon";
import Recettes from "../app/pages/vue4/recettes";
import Homard from "../app/pages/vue40/homard";
import SaintJacques from "../app/pages/vue41/saint_jacques";
import BarRoti from "../app/pages/vue42/bar_roti";
import Tourteau from "../app/pages/vue43/tourteau";
import RecetteVide from "../app/pages/vue44/recette_vide";

const Stack = createNativeStackNavigator();
const NavigationContainerStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen name="vue0" component={HomePage}/>
        <Stack.Screen name="contact" component={Contact}/>
        <Stack.Screen name="vue2" component={MenuBateaux} />
        <Stack.Screen name="vue20" component={DeLaBrise} />
        <Stack.Screen name="vue21" component={Saphir} />
        <Stack.Screen name="vue22" component={GastMicher} />
        <Stack.Screen name="vue23" component={Aquilon} />
        <Stack.Screen name="vue3" component={RestPartun} />
        <Stack.Screen name="vue30" component={Bistrot_Gascons} />
        <Stack.Screen name="vue31" component={Fous_lile} />
        <Stack.Screen name="vue32" component={Bist_Londs} />
        <Stack.Screen name="vue33" component={Vill_Trois} />
        <Stack.Screen name="vue34" component={Bist_Somm} />
        <Stack.Screen name="recettes" component={Recettes} />
        <Stack.Screen name="homard" component={Homard} />
        <Stack.Screen name="stjacques" component={SaintJacques} />
        <Stack.Screen name="barroti" component={BarRoti} />
        <Stack.Screen name="tourteau" component={Tourteau} />
        <Stack.Screen name="recette_vide" component={RecetteVide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainerStack;


