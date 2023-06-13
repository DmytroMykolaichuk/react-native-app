import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import background from "../../images/background.jpg";

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [inputEmailInFocus, setInputEmailInFocus] = useState(false);
  const [inputPasswordInFocus, setInputPasswordInFocus] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  function isHideKeyboard() {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  }

  function handlerSubmit() {
    if (mail.trim() === "" || password.trim() === "") {
      return console.log("Заповніть всі поля");
    }
    if (!EMAIL_REGEXP.test(mail)) {
      setInvalidEmail(true);
      return console.log("Введіть коректний email");
    }
    console.log(`Mail: ${mail}, Password: ${password}`);
    setPassword("");
    setMail("");
    isHideKeyboard();
    if (invalidEmail) {
      setInvalidEmail(false);
    }
  }

  function onFocusEmail() {
    setIsShowKeyboard(true);
    setInputEmailInFocus(true);
  }

  function onFocusPassword() {
    setIsShowKeyboard(true);
    setInputPasswordInFocus(true);
  }

  return (
    <TouchableWithoutFeedback onPress={isHideKeyboard}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground source={background} style={styles.backgroundStyle}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.activeKeyboard}
          >
            <View
              style={{
                ...styles.containerForm,
                paddingBottom: isShowKeyboard ? 16 : 144,
              }}
            >
              <Text style={styles.title}>Увійти</Text>
              <View style={styles.form}>
                <View>
                  <TextInput
                    keyboardType="email-address"
                    style={[
                      styles.input,
                      inputEmailInFocus && styles.inputActive,
                      { color: invalidEmail ? "red" : null },
                    ]}
                    placeholder="Адреса електронної пошти"
                    value={mail}
                    onFocus={onFocusEmail}
                    onBlur={() => setInputEmailInFocus(false)}
                    onChangeText={setMail}
                  />
                </View>
                <View style={styles.label}>
                  <TextInput
                    style={[
                      styles.input,
                      inputPasswordInFocus && styles.inputActive,
                    ]}
                    placeholder="Пароль"
                    secureTextEntry={showPassword}
                    value={password}
                    onChangeText={setPassword}
                    onFocus={onFocusPassword}
                    onBlur={() => setInputPasswordInFocus(false)}
                  />
                  <TouchableOpacity
                    style={styles.containerShowPassword}
                    onPress={() => setShowPassword((prev) => !prev)}
                  >
                    <Text style={styles.textShowPassword}>Показати</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handlerSubmit}
                style={{
                  ...styles.buttonSubmit,
                  marginTop: isShowKeyboard ? 0 : 43,
                }}
              >
                <Text style={styles.textBtnSubmit}>Увійти</Text>
              </TouchableOpacity>
              {!isShowKeyboard && (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.textLink}>
                    Немає акаунту? Зареєструватися
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  activeKeyboard: {
    width: "100%",
  },
  containerForm: {
    paddingTop: 32,
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    position: "relative",
    paddingHorizontal: 16,
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
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 16,
  },
  inputActive: {
    borderWidth: 1,
    borderColor: "#FF6C00",
  },
  buttonSubmit: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 100,
    height: 50,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
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
