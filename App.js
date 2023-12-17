import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function handlePickNumber(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen pickedNumber={handlePickNumber} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.safeAreaViewStyle}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  safeAreaViewStyle: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
