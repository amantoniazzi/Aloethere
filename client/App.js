import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import Navbar from './components/Navbar';

//const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
};

export default App;
