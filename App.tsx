//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {Home} from './src/screens/Home';

export default function App() {
  return (
    <>
    <StatusBar 
    barStyle="light-content"
    backgroundColor="transparent" 
    translucent={true}
    />
    <Home />
    </>
  );
}