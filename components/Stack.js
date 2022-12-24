import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/SignIn";
import Drawer from "./Drawer";
import Details from "../screens/Details";

const NativeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
        initialRouteName={SignIn}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="MuseumPool" component={Drawer} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NativeStack;
