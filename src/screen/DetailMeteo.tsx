import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';

export default function DetailMeteo() {
/*
    const [meteo, setMeteo] = useState("Meteo");
    const [city, setCity] = useState<City>(new City("Paris", 48.856614, 2.3522219));
*/
    const [weather, setWeather] = useState<Weather>(new Weather("2023-01-22 09:55:59", 10000, "Nuageux","couvert", 0.52, -4.34,82, 5.14, 1032,new City("Paris", 48.866667, 2.333333)))
    return (
        <View style={styles.container}>
            <Text>{weather.temperature}</Text>
            <Text>{weather.humidity}</Text>
            <Text>{weather.windspeed}</Text>
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

/*
new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 0.52, -4.34,
    82, 5.14, 1032,
    new City("Paris", 48.866667, 2.333333)
  )*/
  /*
  export const apiUrlBuilder = (lieu: City) => {
    if (lieu === undefined) return {};

  }
  export const getCurrentWeather = (cityName: string) => {
    if (cityName === undefined) return {};
    return WEATHER_DATA.filter(elt => elt.city.name === cityName)[0];
    string url = 'https://api.open-meteo.com/v1/meteofrance?latitude='+45.75+'&longitude='+3.11+'&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,surface_pressure,cloudcover,windspeed_10m&timeformat=unixtime&start_date='+2023-02-03+'&end_date='+2023-02-03+'&timezone=Europe%2FBerlin

  fetch(https://api.open-meteo.com/v1/meteofrance?latitude=45.75&longitude=3.11&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,surface_pressure,cloudcover,windspeed_10m&timeformat=unixtime&start_date=2023-02-03&end_date=2023-02-03&timezone=Europe%2FBerlin

    const response = fetch(url);
    const json = await response.json();
  }*/