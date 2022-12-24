import React from "react";
import { ScrollView, Image, Dimensions } from "react-native";
import { Stack, Text } from "@react-native-material/core";

const Information = ({ museum }) => {
  const { height } = Dimensions.get("screen");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stack pt={20} ph={10} bg="#e3e3e3">
        <Text variant="subtitle1" color="blue">
          Profile
        </Text>
        <Stack bg={museum.bgColor} p={20} mt={10}>
          <Text variant="h6" color="#FFF">
            {museum.title}
          </Text>
          <Text variant="subtitle2" color="#f9f9f9" style={{ marginTop: 20 }}>
            {museum.subtitle}
          </Text>
        </Stack>
        <Stack w="100%" h={height / 3}>
          <Image
            source={museum.image}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Stack>
        <Stack bg="#FFF" p={20} pb={40}>
          <Text variant="body2">{museum.paragraph1}</Text>
          <Text variant="body2" style={{ marginTop: 10 }}>
            {museum.paragraph2}
          </Text>
        </Stack>
      </Stack>
    </ScrollView>
  );
};

export default Information;
