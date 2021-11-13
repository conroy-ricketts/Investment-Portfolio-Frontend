import React from 'react';
import Graph from './Graph';
import Assets from './Assets';
import { View } from 'react-native';

export default function App() {
  return (
    <View style = {{paddingTop: 30}}>
      <Graph/>
      <Assets/>
    </View>
  );
}
