import { useState } from 'react';
import { FlatList, Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';

import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';
import CityListItem from '../components/CityListItem';

export default function AddCity() {

    const [meteo, setMeteo] = useState("Meteo");
    const [city, setCity] = useState<City>(new City("Marseille", 48.856614, 2.3522219));


    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
            <Image source={require("../../assets/magnifyingglass.png")} style={styles.imageLoupe}></Image>

                <TextInput style={styles.textInput} placeholder="Search">
                </TextInput>
            </View>
            
            <FlatList data={CITIES_DATA} renderItem={CityListItem}
                keyExtractor={(item: City) => item.name}/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(223,223,223,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        width: "90%",
        margin: 10
        
    },
    searchBar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor: "rgba(255,255,255,0.3)",
    },
    imageLoupe: {
        width: 20,
        height: 20,
        margin: 10
    }
});
    