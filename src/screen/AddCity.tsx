import { useState } from 'react';
import { FlatList, Button, StyleSheet, Text, View } from 'react-native';
import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';
import CityListItem from '../components/CityListItem';

export default function AddCity() {

    const [meteo, setMeteo] = useState("Meteo");
    const [city, setCity] = useState<City>(new City("Marseille", 48.856614, 2.3522219));


    return (
        <View style={styles.container}>
            <FlatList data={CITIES_DATA} renderItem={CityListItem}
                keyExtractor={(item: City) => item.name}/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
    
    