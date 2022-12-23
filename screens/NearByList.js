import React, { useState } from "react";
import { FlatList } from "react-native";
import { Flex, TextInput } from "@react-native-material/core";
import { FAB } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import CardComponent from "../components/Card";

export default function NearByList({ cusWidth, numColumn, navigation }) {
  const [museum, setMuseum] = useState([
    {
      title: "The Golden Jubilee National Geological Museum",
      image: require("../assets/geological-museum.jpg"),
      bgColor: "green",
      id: Math.random().toString(),
    },
    {
      title: "The Information Technology Museum",
      image: require("../assets/IT.jpg"),
      bgColor: "black",
      id: Math.random().toString(),
    },
    {
      title: "Admincourt museum",
      image: require("../assets/admincourt.jpg"),
      bgColor: "brown",
      id: Math.random().toString(),
    },
    {
      title: "Ayutthaya Studies Institute",
      image: require("../assets/ayutthaya.jpeg"),
      bgColor: "grey",
      id: Math.random().toString(),
    },
    {
      title: "The Golden Jubilee National Geological Museum",
      image: require("../assets/geological-museum.jpg"),
      bgColor: "saddlebrown",
      id: Math.random().toString(),
    },
    {
      title: "The Information Technology Museum",
      image: require("../assets/IT.jpg"),
      bgColor: "olive",
      id: Math.random().toString(),
    },
    {
      title: "Admincourt museum",
      image: require("../assets/admincourt.jpg"),
      bgColor: "goldenrod",
      id: Math.random().toString(),
    },
    {
      title: "Ayutthaya Studies Institute",
      image: require("../assets/ayutthaya.jpeg"),
      bgColor: "dimgrey",
      id: Math.random().toString(),
    },
    {
      title: "The Golden Jubilee National Geological Museum",
      image: require("../assets/geological-museum.jpg"),
      bgColor: "darkslategrey",
      id: Math.random().toString(),
    },
    {
      title: "The Information Technology Museum",
      image: require("../assets/IT.jpg"),
      bgColor: "darkblue",
      id: Math.random().toString(),
    },
    {
      title: "Admincourt museum",
      image: require("../assets/admincourt.jpg"),
      bgColor: "darkolivegreen",
      id: Math.random().toString(),
    },
    {
      title: "Ayutthaya Studies Institute",
      image: require("../assets/ayutthaya.jpeg"),
      bgColor: "teal",
      id: Math.random().toString(),
    },
  ]);

  return (
    <Flex fill p={10}>
      <TextInput
        label="Search museum..."
        variant="outlined"
        leading={(props) => <Icon name="magnify" {...props} />}
      />
      <FlatList
        data={museum}
        key={numColumn}
        numColumns={numColumn}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardComponent
            cusWidth={cusWidth}
            museum={item}
            navigation={navigation}
          />
        )}
      />
      <FAB
        color="#FFF"
        icon={(props) => <Icon name="qrcode-scan" {...props} />}
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          borderRadius: 50,
          backgroundColor: "seagreen",
        }}
      />
    </Flex>
  );
}
