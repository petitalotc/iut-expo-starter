import { useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, FlatList, ListViewBase } from 'react-native';
import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';
import CityListItem from '../components/CityListItem';
import OptionComponent from '../components/OptionComponent';

export default function Settings() {

    const [meteo, setMeteo] = useState("Meteo");
    const [city, setCity] = useState<City>(new City("Paris", 48.856614, 2.3522219));


    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <OptionComponent nameOption="Dark Theme"></OptionComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
});