import React from "react";
import { StatusBar } from "expo-status-bar";
import { Flex, Button, AppBar, Stack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const SignIn = ({ navigation }) => {
  return (
    <Flex fill>
      <StatusBar style="auto" />
      <AppBar
        title="MuseumPool"
        color="tomato"
        tintColor="#FFF"
        style={{ paddingTop: 40 }}
      />
      <Stack fill justify="end" items="center" pb={30} spacing={30}>
        <Button
          title="Sign in with Google"
          leading={(props) => <Icon name="google" {...props} />}
          color="#FFF"
          onPress={() => navigation.navigate("MuseumPool")}
        />
        <Button
          title="Sign in with Facebook"
          color="#4267B2"
          leading={(props) => <Icon name="facebook" {...props} />}
          onPress={() => navigation.navigate("MuseumPool")}
        />
      </Stack>
    </Flex>
  );
};

export default SignIn;
