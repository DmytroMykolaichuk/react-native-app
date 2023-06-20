import { RegistrationScreen } from "./Screens/AuthScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/AuthScreen/LoginScreen";
import { PostsScreen } from "./Screens/mainScreen/PostsScreen";
import { ProfileScreen } from "./Screens/mainScreen/ProfileScreen";
import { CreatePostsScreen } from "./Screens/mainScreen/CreatePostsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Home } from "./Screens/mainScreen/Home";

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
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
      </AuthStack.Navigator>
    );
  }
  return (
    <Tab.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 9,
          paddingHorizontal: 80,
        },
        tabBarItemStyle: {
          borderRadius: 20,
        },
      }}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-grid-outline"
              size={24}
              color={focused ? "#fff" : "rgba(33, 33, 33, 0.8)"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add-sharp"
              size={24}
              color={focused ? "#fff" : "rgba(33, 33, 33, 0.8)"}
            />
          ),
          title: "Публікація",
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="exit-outline"
                size={24}
                color="#BDBDBD"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="person"
              size={24}
              color={focused ? "#fff" : "rgba(33, 33, 33, 0.8)"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
