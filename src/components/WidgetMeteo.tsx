import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';
import { useNavigation } from '@react-navigation/native';

type WidgetMeteoProps = {
    item: Weather;
}
  
export default function WidgetMeteo(props : WidgetMeteoProps) {
return (
    <View style={styles.container}>
        <Text>{props.item.city.name}</Text>
        <Text>{props.item.temperature} °C</Text>
    </View>

)
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        width: 150,
        height: 150,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
  
    