import React from "react";
import { TouchableOpacity } from "react-native";
import { Flex } from "@react-native-material/core";
import { Card, Title, Paragraph } from "react-native-paper";

const CardComponent = ({ cusWidth, museum, navigation }) => {
  return (
    <Flex w={`${cusWidth}%`} m={10}>
      {cusWidth === "95" ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Details", { museum })}
        >
          <Card style={{ backgroundColor: `${museum.bgColor}` }}>
            <Card.Content style={{ padding: 20 }}>
              <Title style={{ color: "#FFF" }}>{museum.title}</Title>
            </Card.Content>
            <Card.Cover
              style={{ height: 250 }}
              source={museum.image}
              resizeMode="cover"
            />
          </Card>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("Details")}
        >
          <Card>
            <Card.Cover
              style={{ height: 120 }}
              source={museum.image}
              resizeMode="cover"
            />
            <Card.Content style={{ padding: 15 }}>
              <Paragraph>{museum.title}</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
    </Flex>
  );
};

export default CardComponent;
