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
      subtitle:
        "The Golden Jubilee Nation Geological Museum. Liab Khlong Ha Khlong Ha subdistrict, Khlong Luang di",
      paragraph1:
        "The Golden Jubilee Nation Geological Museum, Pathum Thani province project has been implemented by Department of Mineral Resources. It is one of twelve projects according to art, cultural and scientific institute establishment plan to present as a royal worship due to the Fiftieth Anniversary (Golden Jubilee) Celebrations of His Majesty's Accession to the Throne of King Rama IX.",
      paragraph2:
        "The museum is an important site for geologic conservation and reference information that Thai people can educate themselves about geology which plays an important role on human life and country development.",
      explore: [
        {
          image: require("../assets/golden/image1.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/golden/image2.jpeg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/golden/image3.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/golden/image4.jpg"),
          title: "lorem ipsum",
        },
      ],
      image: require("../assets/geological-museum.jpg"),
      bgColor: "green",
      id: Math.random().toString(),
    },
    {
      title: "The Information Technology Museum",
      subtitle: "Techno Thani, Khlong Ha, Klong Luang, Pathum Thani, 12120",
      paragraph1:
        "At the iformation Technology Museum you are invited to take a trip both back and forward in time on a journey through the story of communication technology; from smoke signals to 4G and beyond! Hosting an array of different communication methods and interactive approaches, the IT Museum is a great place to reflect on how far humans have come since early man - whilst still being amazed at how fast and furious the future arrive upon on all.",
      paragraph2:
        "The It Museum is a place to discover how people communicate! With lots of interactive elements, come and explore how the communication of information has developed from early man, up until the fast paced technologies of the modern day.",
      explore: [
        {
          image: require("../assets/technology/image1.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/technology/image2.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/technology/image3.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/technology/image4.jpg"),
          title: "lorem ipsum",
        },
      ],
      image: require("../assets/IT.jpg"),
      bgColor: "black",
      id: Math.random().toString(),
    },
    {
      title: "Admincourt museum",
      subtitle: "admincourt museum",
      paragraph1: "admincourt museum",
      paragraph2: "museum@admincourt.go.th",
      explore: [
        {
          image: require("../assets/admincourt/image1.jpeg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/admincourt/image2.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/admincourt/image3.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/admincourt/imge4.jpeg"),
          title: "lorem ipsum",
        },
      ],
      image: require("../assets/admincourt.jpg"),
      bgColor: "brown",
      id: Math.random().toString(),
    },
    {
      title: "Ayutthaya Studies Institute",
      subtitle:
        "96 Moo 2 Predee Panomyong Rd. Tonbol Pratoochai Amphor Ayutthaya. Ayutthaya Province",
      paragraph1: "Ayutthaya Studies Institue",
      paragraph2: "ayutthayastudies@gmail.com",
      explore: [
        {
          image: require("../assets/ayuttaya/image1.jpeg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/ayuttaya/image2.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/ayuttaya/image3.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/ayuttaya/image4.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/ayuttaya/image5.jpeg"),
          title: "lorem ipsum",
        },
      ],
      image: require("../assets/ayutthaya.jpeg"),
      bgColor: "grey",
      id: Math.random().toString(),
    },
    {
      title: "The Golden Jubilee National Geological Museum",
      subtitle:
        "The Golden Jubilee Nation Geological Museum. Liab Khlong Ha Khlong Ha subdistrict, Khlong Luang di",
      paragraph1:
        "The Golden Jubilee Nation Geological Museum, Pathum Thani province project has been implemented by Department of Mineral Resources. It is one of twelve projects according to art, cultural and scientific institute establishment plan to present as a royal worship due to the Fiftieth Anniversary (Golden Jubilee) Celebrations of His Majesty's Accession to the Throne of King Rama IX.",
      paragraph2:
        "The museum is an important site for geologic conservation and reference information that Thai people can educate themselves about geology which plays an important role on human life and country development.",
      explore: [
        {
          image: require("../assets/golden/image1.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/golden/image2.jpeg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/golden/image3.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/golden/image4.jpg"),
          title: "lorem ipsum",
        },
      ],
      image: require("../assets/geological-museum.jpg"),
      bgColor: "green",
      id: Math.random().toString(),
    },
    {
      title: "The Information Technology Museum",
      subtitle: "Techno Thani, Khlong Ha, Klong Luang, Pathum Thani, 12120",
      paragraph1:
        "At the iformation Technology Museum you are invited to take a trip both back and forward in time on a journey through the story of communication technology; from smoke signals to 4G and beyond! Hosting an array of different communication methods and interactive approaches, the IT Museum is a great place to reflect on how far humans have come since early man - whilst still being amazed at how fast and furious the future arrive upon on all.",
      paragraph2:
        "The It Museum is a place to discover how people communicate! With lots of interactive elements, come and explore how the communication of information has developed from early man, up until the fast paced technologies of the modern day.",
      explore: [
        {
          image: require("../assets/technology/image1.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/technology/image2.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/technology/image3.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/technology/image4.jpg"),
          title: "lorem ipsum",
        },
      ],
      image: require("../assets/IT.jpg"),
      bgColor: "black",
      id: Math.random().toString(),
    },
    {
      title: "Admincourt museum",
      subtitle: "admincourt museum",
      paragraph1: "admincourt museum",
      paragraph2: "museum@admincourt.go.th",
      explore: [
        {
          image: require("../assets/admincourt/image1.jpeg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/admincourt/image2.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/admincourt/image3.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/admincourt/imge4.jpeg"),
          title: "lorem ipsum",
        },
      ],
      image: require("../assets/admincourt.jpg"),
      bgColor: "brown",
      id: Math.random().toString(),
    },
    {
      title: "Ayutthaya Studies Institute",
      subtitle:
        "96 Moo 2 Predee Panomyong Rd. Tonbol Pratoochai Amphor Ayutthaya. Ayutthaya Province",
      paragraph1: "Ayutthaya Studies Institue",
      paragraph2: "ayutthayastudies@gmail.com",
      explore: [
        {
          image: require("../assets/ayuttaya/image1.jpeg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/ayuttaya/image2.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/ayuttaya/image3.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/ayuttaya/image4.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/ayuttaya/image5.jpeg"),
          title: "lorem ipsum",
        },
      ],
      image: require("../assets/ayutthaya.jpeg"),
      bgColor: "grey",
      id: Math.random().toString(),
    },
    {
      title: "The Golden Jubilee National Geological Museum",
      subtitle:
        "The Golden Jubilee Nation Geological Museum. Liab Khlong Ha Khlong Ha subdistrict, Khlong Luang di",
      paragraph1:
        "The Golden Jubilee Nation Geological Museum, Pathum Thani province project has been implemented by Department of Mineral Resources. It is one of twelve projects according to art, cultural and scientific institute establishment plan to present as a royal worship due to the Fiftieth Anniversary (Golden Jubilee) Celebrations of His Majesty's Accession to the Throne of King Rama IX.",
      paragraph2:
        "The museum is an important site for geologic conservation and reference information that Thai people can educate themselves about geology which plays an important role on human life and country development.",
      explore: [
        {
          image: require("../assets/golden/image1.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/golden/image2.jpeg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/golden/image3.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/golden/image4.jpg"),
          title: "lorem ipsum",
        },
      ],
      image: require("../assets/geological-museum.jpg"),
      bgColor: "green",
      id: Math.random().toString(),
    },
    {
      title: "The Information Technology Museum",
      subtitle: "Techno Thani, Khlong Ha, Klong Luang, Pathum Thani, 12120",
      paragraph1:
        "At the iformation Technology Museum you are invited to take a trip both back and forward in time on a journey through the story of communication technology; from smoke signals to 4G and beyond! Hosting an array of different communication methods and interactive approaches, the IT Museum is a great place to reflect on how far humans have come since early man - whilst still being amazed at how fast and furious the future arrive upon on all.",
      paragraph2:
        "The It Museum is a place to discover how people communicate! With lots of interactive elements, come and explore how the communication of information has developed from early man, up until the fast paced technologies of the modern day.",
      explore: [
        {
          image: require("../assets/technology/image1.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/technology/image2.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/technology/image3.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/technology/image4.jpg"),
          title: "lorem ipsum",
        },
      ],
      image: require("../assets/IT.jpg"),
      bgColor: "black",
      id: Math.random().toString(),
    },
    {
      title: "Admincourt museum",
      subtitle: "admincourt museum",
      paragraph1: "admincourt museum",
      paragraph2: "museum@admincourt.go.th",
      explore: [
        {
          image: require("../assets/admincourt/image1.jpeg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/admincourt/image2.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/admincourt/image3.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/admincourt/imge4.jpeg"),
          title: "lorem ipsum",
        },
      ],
      image: require("../assets/admincourt.jpg"),
      bgColor: "brown",
      id: Math.random().toString(),
    },
    {
      title: "Ayutthaya Studies Institute",
      subtitle:
        "96 Moo 2 Predee Panomyong Rd. Tonbol Pratoochai Amphor Ayutthaya. Ayutthaya Province",
      paragraph1: "Ayutthaya Studies Institue",
      paragraph2: "ayutthayastudies@gmail.com",
      explore: [
        {
          image: require("../assets/ayuttaya/image1.jpeg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/ayuttaya/image2.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/ayuttaya/image3.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/ayuttaya/image4.jpg"),
          title: "lorem ipsum",
        },
        {
          image: require("../assets/ayuttaya/image5.jpeg"),
          title: "lorem ipsum",
        },
      ],
      image: require("../assets/ayutthaya.jpeg"),
      bgColor: "grey",
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
            title={item.title}
            bgColor={item.bgColor}
            image={item.image}
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
