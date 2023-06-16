import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function CommentsScreen({ route }) {
  const [text, setText] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  function isHideKeyboard() {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  }

  return (
    <TouchableWithoutFeedback onPress={isHideKeyboard}>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: route.params.photo }} style={styles.photo} />
        </View>

        <View></View>

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.activeKeyboard}
        >
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Коментувати..."
              style={styles.input}
              value={text}
              onPress={setText}
            />
            <TouchableOpacity style={styles.inputBtn}>
              <AntDesign name="arrowup" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
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
  activeKeyboard: {
    width: "100%",
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
