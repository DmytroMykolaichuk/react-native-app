import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function CommentsScreen({ route }) {
  const [text, setText] = useState(null);
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: route.params.photo }} style={styles.photo} />
      </View>
      <View></View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Коментувати..." style={styles.input} />
        <TouchableOpacity style={styles.inputBtn}>
          <AntDesign name="arrowup" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  photo: {
    height: 240,
    width: "auto",
    borderRadius: 8,
  },
  inputContainer: {
    position: "relative",
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    paddingVertical: 16,
    paddingLeft: 16,
  },
  inputBtn: {
    position: "absolute",
    bottom: 8,
    right: 8,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
  },
});
