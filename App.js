import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen";

// автовиправлення прибирає лапки з "Roboto"
const roboto = "Roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    [roboto]: require("./src/font/Roboto-Medium.ttf"),
  });
  return (
    <View style={styles.container}>
      {fontsLoaded && <RegistrationScreen />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
