import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA } from '../data/stub';

export default function Meteo() {

    const [meteo, setMeteo] = useState("Meteo");
    const [city, setCity] = useState<City>(new City("Paris", 48.856614, 2.3522219));


    return (
        <View style={styles.container}>
            <Text>{city.name}</Text>
            <Text>{city.latitude}</Text>
            <Text>{city.longitude}</Text>
            <Button title="Meteo" onPress={() => setMeteo("Meteo")} />
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