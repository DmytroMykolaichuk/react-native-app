import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import background from "./src/images/background.jpg";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";

const roboto = "Roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    [roboto]: require("./src/font/Roboto-Medium.ttf"),
  });
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        {fontsLoaded && <RegistrationScreen />}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
