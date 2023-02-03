import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import * as React from "react";

import Meteo from "../screen/Meteo";
import AddCity from "../screen/AddCity";

const Tab = createBottomTabNavigator();

export default function MainTab(){
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Meteo">
                <Tab.Screen name="Home" component={Meteo}
                                           options={{
                                               title: 'Home',
                                           }}/>
                <Tab.Screen name="Settings" component={AddCity}
                                           options={{
                                               title: 'Settings',
                                           }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}