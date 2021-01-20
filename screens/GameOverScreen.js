import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1500}
          // source={{
          //   uri:
          //     "https://spiegelworld.com/wp-content/themes/spiegel2020/absinthe//img/hero-fallback.jpg",
          // }}
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <BodyText>
        Number of rounds:{" "}
        <Text style={styles.highlights}>{props.roundsNumber}</Text>
      </BodyText>
      <BodyText>
        Number was: <Text style={styles.highlights}>{props.userNumber}</Text>
      </BodyText>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlights: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
    textAlign: "center"
  },
});

export default GameOverScreen;
