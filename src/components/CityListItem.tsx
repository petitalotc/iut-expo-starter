//item for meteo in list

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';
import { useNavigation } from '@react-navigation/native';

type CityListItemProps = {
    item: City;
}
  
export default function CityListItem(props: CityListItemProps) {
return (
    <View>
    <View style={styles.container}>
        <View style={{width: "80%"}}>
        <Text>{props.item.name}</Text>
        <Text>{props.item.name}</Text>
        <Text>{props.item.longitude}</Text>
        <Text>{props.item.latitude}</Text>
        </View>
    </View>
    <View style={styles.separator}/>
    </View>
)
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: "30%"
},
separator: {
    marginVertical: 4,
    backgroundColor: "rgba(255,255,255,0.3)",
    height: 1,
    width: '90%',
},
teaserImage: {
    width: 50,
    height: 50,
}
});
  
    