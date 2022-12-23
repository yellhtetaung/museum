import React from "react";
import { Dimensions } from "react-native";
import { Flex, Stack, Avatar, Text } from "@react-native-material/core";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const { height } = Dimensions.get("screen");

const CustomDrawer = (props) => {
  return (
    <Flex fill>
      <DrawerContentScrollView {...props}>
        <Stack
          h={height / 3}
          mt={-30}
          bg="#5BB318"
          justify="end"
          ps={20}
          pb={20}
          spacing={15}
        >
          <Avatar
            label="Username"
            style={{ borderWidth: 3, borderColor: "#FFF" }}
            autoColor
          />
          <Text color="#FFF">Username</Text>
          <Text color="#FFF">usermail@gmail.com</Text>
        </Stack>
        <DrawerItemList {...props} />
        <DrawerItem
          label="SignOut"
          icon={(props) => <Icon name="logout-variant" {...props} />}
          onPress={() => props.navigation.navigate("SignIn")}
        />
      </DrawerContentScrollView>
    </Flex>
  );
};

export default CustomDrawer;
