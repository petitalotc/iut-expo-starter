import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import * as React from "react";
import { FontAwesome } from "@expo/vector-icons";
import DetailMeteo from "../screen/DetailMeteo";
import Meteo from "../screen/Meteo";
import AddCity from "../screen/AddCity";
const Tab = createBottomTabNavigator();

export default function MainTab(){
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown : false}}>
                <Tab.Screen name="Home" component={DetailMeteo}
                                           options={{
                                               title: 'Home',
                                               tabBarIcon: ({color}) => <TabBarIcon name="home" color="black"/>
                                           }}/>
                <Tab.Screen name="AddCity" component={AddCity}
                                           options={{
                                               title: 'Add',
                                               tabBarIcon: ({color}) => <FontAwesome name="plus" size={24} color="black" />,
                                            }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} {...props} />;
}