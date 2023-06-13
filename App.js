import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./src/Screens/AuthScreen/RegistrationScreen";
import { LoginScreen } from "./src/Screens/AuthScreen/LoginScreen";
// import { PostsScreen } from "./src/Screens/mainScreen/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

// SplashScreen.preventAutoHideAsync();
const roboto = "Roboto";

const AuthStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    [roboto]: require("./src/font/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
