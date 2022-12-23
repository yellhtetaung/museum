import React from "react";
import { View, Text } from "react-native";
import { Flex, AppBar, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import NearByList from "./NearByList";

const Details = ({ navigation }) => {
  return (
    <Flex>
      <AppBar
        title="Details"
        style={{ paddingTop: 30 }}
        leading={(props) => (
          <IconButton
            icon={(props) => <Icon name="arrow-left" {...props} />}
            {...props}
            onPress={() => navigation.goBack()}
          />
        )}
        color="tomato"
        tintColor="#FFF"
      />
    </Flex>
  );
};

export default Details;
