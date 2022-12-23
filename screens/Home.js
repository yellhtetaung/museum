import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import { AppBar, Flex, HStack, IconButton } from "@react-native-material/core";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import NearByList from "./NearByList";
import Map from "./Map";

const { height } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  const Tab = createMaterialTopTabNavigator();

  const [cusWidth, setCusWidth] = useState("95");
  const [numColumn, setNumColumn] = useState(1);
  const [dashboardIcon, setDashboardIcon] = useState("view-dashboard");

  const changeWidth = () => {
    setCusWidth(cusWidth === "95" ? "45" : "95");
    setNumColumn(numColumn === 1 ? 2 : 1);
    setDashboardIcon(
      dashboardIcon === "view-dashboard" ? "view-stream" : "view-dashboard"
    );
  };

  return (
    <Flex fill>
      <StatusBar style="auto" />
      <AppBar
        style={{
          height: height / 9,
          justifyContent: "flex-end",
          paddingHorizontal: 10,
        }}
        title="Museum Pool"
        color="tomato"
        tintColor="#FFF"
        leading={(props) => (
          <IconButton
            icon={(props) => <Icon name="menu" {...props} />}
            {...props}
            onPress={() => navigation.openDrawer()}
          />
        )}
        trailing={(props) => (
          <HStack>
            <IconButton
              icon={(props) => <Icon name="map-marker-radius" {...props} />}
              {...props}
            />
            <IconButton
              icon={(props) => <Icon name={dashboardIcon} {...props} />}
              {...props}
              onPress={changeWidth}
            />
          </HStack>
        )}
      />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#FD841F",
          },
          tabBarInactiveTintColor: "#FFF",
          tabBarIndicatorStyle: { backgroundColor: "green" },
          tabBarActiveTintColor: "#000",
        }}
        initialRouteName="Nearby List"
      >
        <Tab.Screen
          name="Nearby List"
          children={() => (
            <NearByList
              cusWidth={cusWidth}
              numColumn={numColumn}
              navigation={navigation}
            />
          )}
        />
        <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
    </Flex>
  );
};

export default Home;
