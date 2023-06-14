import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { PostsScreen } from "./PostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";

const Tab = createBottomTabNavigator();

export function Home({ navigation }) {
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
          title: "Публікація",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add-sharp"
              size={24}
              color={focused ? "#fff" : "rgba(33, 33, 33, 0.8)"}
            />
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
          // headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

// import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native/";
// import avatar from "../images/exampleAvatar.png/";
// import { Ionicons, Octicons } from "@expo/vector-icons";

// export function PostsScreen() {
//   return (
//     <View style={styles.containerPS}>
//       <View style={styles.header}>
//         <Text style={styles.titlePS}>Публікації</Text>
//         <TouchableOpacity style={styles.exitBtns}>
//           <Ionicons name="exit-outline" size={24} color="#BDBDBD" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.main}>
//         <View style={styles.user}>
//           <Image source={avatar} />
//           <View>
//             <Text style={styles.userName}>Natali Romanova</Text>
//             <Text style={styles.userEmail}>email@example.com</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.footer}>
//         <View style={styles.containerBtnFooter}>
//           <TouchableOpacity style={styles.deactiveBtnFooter}>
//             <Ionicons
//               name="ios-grid-outline"
//               size={24}
//               color="rgba(33, 33, 33, 0.8)"
//             />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.activeBtnFooter}>
//             <Ionicons name="add-sharp" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.deactiveBtnFooter}>
//             <Octicons name="person" size={24} color="rgba(33, 33, 33, 0.8)" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   containerPS: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingTop: 55,
//     backgroundColor: "#fff",
//     shadowOffset: { width: 0, height: 0.5 },
//     shadowColor: "rgba(0, 0, 0, 0.3)",
//     shadowOpacity: 1,
//     shadowRadius: 1,
//     position: "relative",
//   },
//   exitBtns: {
//     position: "absolute",
//     right: 16,
//     bottom: 11,
//   },
//   titlePS: {
//     fontFamily: "Roboto",
//     fontWeight: 500,
//     fontSize: 17,
//     lineHeight: 22,
//     textAlign: "center",
//     color: "#212121",
//     paddingVertical: 11,
//   },
//   main: {
//     flex: 1,
//     paddingTop: 32,
//     paddingLeft: 16,
//     gap: 16,
//   },
//   user: {
//     flexDirection: "row",
//     justifyContent: "flrx-start",
//     alignItems: "center",
//     gap: 8,
//   },
//   userName: {
//     fontFamily: "Roboto",
//     fontWeight: 700,
//     fontSize: 13,
//     lineHeight: 15,
//     color: "#212121",
//   },
//   userEmail: {
//     fontFamily: "Roboto",
//     fontSize: 11,
//     lineHeight: 13,
//     color: "rgba(33, 33, 33, 0.8)",
//   },
//   footer: {
//     backgroundColor: "#fff",
//     paddingTop: 9,
//     paddingBottom: 34,
//     shadowOffset: { width: 0, height: -0.5 },
//     shadowColor: "rgba(0, 0, 0, 0.3)",
//     shadowOpacity: 1,
//     shadowRadius: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   containerBtnFooter: {
//     flexDirection: "row",
//     gap: 31,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   activeBtnFooter: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: 70,
//     height: 40,
//     backgroundColor: "#FF6C00",
//     borderRadius: 20,
//   },
//   deactiveBtnFooter: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: 40,
//     height: 40,
//   },
// });
