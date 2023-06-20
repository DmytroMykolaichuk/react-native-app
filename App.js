import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "./src/Screens/AuthScreen/RegistrationScreen";
import { LoginScreen } from "./src/Screens/AuthScreen/LoginScreen";
import { Home } from "./src/Screens/mainScreen/Home";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
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
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack.Navigator initialRouteName="Login">
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
          <AuthStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
