import React from "react";
import { TouchableOpacity } from "react-native";
import { Flex, IconButton, Text } from "@react-native-material/core";
import { Card, Title } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const CardComponent = ({
  cusWidth,
  museum,
  title,
  bgColor,
  image,
  navigation,
}) => {
  return (
    <Flex w={`${cusWidth}%`} m={10}>
      {cusWidth === "95" ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Details", { museum })}
        >
          <Card style={{ backgroundColor: `${bgColor}` }}>
            <Card.Content style={{ padding: 20 }}>
              <Title style={{ color: "#FFF" }}>{title}</Title>
            </Card.Content>
            <Card.Cover
              style={{ height: 250 }}
              source={image}
              resizeMode="cover"
            />
            <Card.Content
              style={{
                backgroundColor: "#FFF",
                padding: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <IconButton
                style={{
                  marginStart: "85%",
                  backgroundColor: "#444",
                  borderRadius: 0,
                  transform: [{ rotate: "45deg" }, { scale: 0.4 }],
                }}
                icon={() => (
                  <Icon
                    name="arrow-right-top-bold"
                    size={30}
                    color="#FFF"
                    style={{ transform: [{ rotate: "-45deg" }] }}
                  />
                )}
              />
            </Card.Content>
          </Card>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("Details", { museum })}
        >
          <Card>
            <Card.Cover
              style={{ height: 120 }}
              source={image}
              resizeMode="cover"
            />
            <Card.Content style={{ paddingVertical: 10 }}>
              <Text>{title}</Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
    </Flex>
  );
};

export default CardComponent;
