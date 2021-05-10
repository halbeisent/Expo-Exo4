import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <View style={{flex:1}}>
    <View style={{flex: 2, flexDirection: "row"}}>
      <View style={{flex: 3}}>
        <View style={{flex: 3, backgroundColor: "purple"}}></View>
        <View style={{flex: 2, backgroundColor: "yellow"}}></View>
        <View style={{flex: 1, backgroundColor: "pink"}}></View>
      </View>
      <View style={{flex: 2, flexDirection: "row"}}>
        <View style={{flex: 2, backgroundColor: "red"}}></View>
        <View style={{flex: 1, backgroundColor: "blue"}}></View>
      </View>
    </View>
    <View style={{flex: 2, backgroundColor: "lightgrey"}}></View>
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
