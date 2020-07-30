import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Search from '../screens/Search';
import MyPlants from '../screens/MyPlants';

const Tab = createBottomTabNavigator();

function Navbar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#00BFA6',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPlants"
        component={MyPlants}
        options={{
          tabBarLabel: 'MyPlants',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-leaf" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navbar;
