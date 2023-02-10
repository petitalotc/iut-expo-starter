import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Meteo from './src/screen/Meteo';
import NavBar from './src/components/NavBar';
import DetailMeteo from './src/screen/DetailMeteo';

import MainTab from './src/navigator/Navigator';

export default function App() {
  return (
    <MainTab/>
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
