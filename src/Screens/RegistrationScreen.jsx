import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export function RegistrationScreen() {
  return (
    <View style={styles.containerForm}>
      <View style={styles.containerAvatar}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonAvatar}
          onPress={() => console.log("test")}
        >
          <Text style={{ color: "#FF6C00" }}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.form}>
        <View>
          <TextInput style={styles.input} placeholder="Логін" />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => console.log("test")}
          style={styles.buttonSubmit}
        >
          <Text style={styles.textBtnSubmit}>Зареєстуватися</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    paddingTop: 92,
    paddingBottom: 79,
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    position: "relative",
  },
  containerAvatar: {
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
  },
  buttonAvatar: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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
});
