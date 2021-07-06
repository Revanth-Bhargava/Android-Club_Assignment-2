import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator"; //importing Tab navigator in Drawer navigator

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;