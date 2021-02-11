import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View, Image} from 'react-native';
import CountUp from './container/CountUp'

export default function App() {
  return (
  
    <View style={styles.container}>
      <Image style={styles.img}
       source={require('./assets/header.png')}/>
     <CountUp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height:50,
    width:50, 
  }
});
