import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import background from "../images/background.jpg";

export function LoginScreen() {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <ImageBackground source={background} style={styles.backgroundStyle}>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Увійти</Text>
        <View style={styles.form}>
          <View>
            <TextInput
              keyboardType="email-address"
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />
          </View>
          <View style={styles.label}>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              style={styles.containerShowPassword}
              onPress={() => setShowPassword((prev) => !prev)}
            >
              <Text style={styles.textShowPassword}>Показати</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log("test")}
            style={styles.buttonSubmit}
          >
            <Text style={styles.textBtnSubmit}>Увійти</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textLink}>Немає акаунту? Зареєструватися</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  containerForm: {
    paddingTop: 32,
    paddingBottom: 145,
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 32,
  },
  form: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 16,
  },
  buttonSubmit: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 100,
    height: 50,
    backgroundColor: "#FF6C00",
    marginTop: 43,
  },
  textBtnSubmit: {
    paddingTop: 16,
    paddingBottom: 16,
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  textLink: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  label: {
    position: "relative",
  },
  containerShowPassword: {
    position: "absolute",
    right: 16,
    top: "25%",
  },
  textShowPassword: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",
    color: "#1B4371",
  },
});
