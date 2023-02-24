import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather, WEATHER_DATA } from '../../data/stub';
import WidgetMeteo from '../components/WidgetMeteo';

export default function DetailMeteo() {

    //City
    const [meteo, setMeteo] = useState<Weather>(new Weather("2023-01-22 09:55:59", 10000, "Nuageux",
    "couvert", 20, -4.34,
    82, 5.14, 1032,
    new City("Paris", 48.866667, 2.333333)
  ));
    
    return (
      <View style={styles.container}>
        
          <FlatList style={styles.flatList} data={WEATHER_DATA} renderItem={WidgetMeteo}></FlatList>
      
        
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
    },
  }
);

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