import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import Home from "../screens/Home";
import Setting from "../screens/Setting";

import CustomDrawer from "./CustomDrawer";

export default function Drawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#F57328",
      }}
      initialRouteName={Home}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: (props) => <Icon name="home-outline" {...props} />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Setting}
        options={{
          drawerIcon: (props) => <Icon name="cog-outline" {...props} />,
        }}
      />
    </Drawer.Navigator>
  );
}
