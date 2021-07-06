import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator"; //importing Stack navigator in Tab navigator

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} 
       options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
        ) }} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} 
      options={{
        tabBarLabel: 'Contact',
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
        ) }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
