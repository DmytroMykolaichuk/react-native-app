import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
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
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  function isHideKeyboard() {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  }
  return (
    <TouchableWithoutFeedback onPress={isHideKeyboard}>
      <View style={styles.container}>
        {fontsLoaded && (
          <LoginScreen
            setIsShowKeyboard={setIsShowKeyboard}
            isShowKeyboard={isShowKeyboard}
          />
        )}
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
