import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Search from './screens/Search';
import MyPlants from './screens/MyPlants';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Aloe there 👋" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="MyPlants" component={MyPlants} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
