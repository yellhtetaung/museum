import React, { useState } from "react";
import { Dimensions } from "react-native";
import { Flex, AppBar, IconButton, Text } from "@react-native-material/core";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import Information from "./Information";
import Explore from "./Explore";

const Details = ({ navigation, route }) => {
  const { museum } = route.params;
  const Tab = createMaterialTopTabNavigator();
  const { height } = Dimensions.get("screen");

  const [cusWidth, setCusWidth] = useState("45");
  const [numColumn, setNumColumn] = useState(2);
  const [dashboardIcon, setDashboardIcon] = useState("view-stream");

  const changeWidth = () => {
    setCusWidth(cusWidth === "45" ? "95" : "45");
    setNumColumn(numColumn === 2 ? 1 : 2);
    setDashboardIcon(
      dashboardIcon === "view-stream" ? "view-dashboard" : "view-stream"
    );
  };

  return (
    <Flex fill>
      <AppBar
        title={museum.title.substring(0, 20).concat("....")}
        titleContentStyle={{ flexWrap: "nowrap" }}
        style={{ paddingTop: height / 20 }}
        leading={(props) => (
          <IconButton
            icon={(props) => <Icon name="arrow-left" {...props} />}
            {...props}
            onPress={() => navigation.goBack()}
          />
        )}
        trailing={(props) => (
          <IconButton
            icon={(props) => <Icon name={dashboardIcon} {...props} />}
            {...props}
            onPress={changeWidth}
          />
        )}
        color="tomato"
        tintColor="#FFF"
      />
      <Tab.Navigator initialRouteName="information">
        <Tab.Screen
          name="information"
          children={() => <Information museum={museum} />}
        />
        <Tab.Screen
          name="explore"
          children={() => (
            <Explore
              cusWidth={cusWidth}
              numColumn={numColumn}
              bgColor={museum.bgColor}
              title={museum.title}
              explore={museum.explore}
            />
          )}
        />
      </Tab.Navigator>
    </Flex>
  );
};

export default Details;
