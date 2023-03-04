//item for meteo in list

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Switch } from 'react-native';
import { City, Weather, CITIES_DATA, FAVORITE_CITY_DATA, getCurrentWeather } from '../../data/stub';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

type OptionComponentProps = {
    nameOption: String;
}

export default function OptionComponent(props: OptionComponentProps) {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>{props.nameOption}</Text>
                <Switch trackColor={{ false: '#767577' }}    
                    onValueChange={toggleSwitch}
                    value={isEnabled}></Switch>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
    },
    separator: {
        marginVertical: 4,
        backgroundColor: "rgba(223,223,223,1)",
        height: 1,
        width: '90%',
    },
    teaserImage: {
        width: 50,
        height: 50,
    },
    text: {
        fontWeight: "bold",
        color: "black",
        margin: 10,
        width: '100%',
    },
});

