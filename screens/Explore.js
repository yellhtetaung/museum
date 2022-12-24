import React from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { Flex, IconButton } from "@react-native-material/core";
import { Card, Title, Paragraph } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Explore = ({ cusWidth, bgColor, explore, numColumn }) => {
  return (
    <Flex fill>
      <FlatList
        data={explore}
        key={numColumn}
        numColumns={numColumn}
        renderItem={({ item }) => (
          <Flex w={`${cusWidth}%`} m={10}>
            {cusWidth === "95" ? (
              <TouchableOpacity activeOpacity={0.8}>
                <Card style={{ backgroundColor: `${bgColor}` }}>
                  <Card.Content style={{ padding: 20 }}>
                    <Title style={{ color: "#FFF" }}>{item.title}</Title>
                  </Card.Content>
                  <Card.Cover
                    style={{ height: 250 }}
                    source={item.image}
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
              <TouchableOpacity activeOpacity={0.9}>
                <Card>
                  <Card.Cover
                    style={{ height: 120 }}
                    source={item.image}
                    resizeMode="cover"
                  />
                  <Card.Content style={{ padding: 15 }}>
                    <Paragraph>{item.title}</Paragraph>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            )}
          </Flex>
        )}
      />
    </Flex>
  );
};

export default Explore;
