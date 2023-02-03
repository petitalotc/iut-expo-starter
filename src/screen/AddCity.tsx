import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';

export default function AddCity() {

    const [meteo, setMeteo] = useState("Meteo");
    const [city, setCity] = useState<City>(new City("Marseille", 48.856614, 2.3522219));


    return (
        <View style={styles.container}>
            <Text>{city.name}</Text>
            <Text>{city.latitude}</Text>
            <Text>{city.longitude}</Text>
            <Button title="Meteo" onPress={() => getCurrentWeather("Marseille")} />
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
    
    