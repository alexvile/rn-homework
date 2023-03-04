// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/Jan_Ori_Canis-2.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 270,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello</Text>
                <Text style={styles.headerTitle}>Welcome back</Text>
              </View>

              <View>
                <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>SIGN IN</Text>
              </TouchableOpacity>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: 'center',
    justifyContent: "flex-end",
    // alignItems: 'center'
  },
  header: {
    alignItems: "center",
    // marginBottom: 50
  },
  headerTitle: {
    fontSize: 30,
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 40,
    borderRadius: 6,
    color: "#fff",
    fontSize: 18,
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    borderWidth: 1,
    height: 40,
    borderRadius: 6,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#fff",
      },
      android: {
        backgroundColor: "#ffb6c1",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    color: "#f0f8ff",
    fontSize: 18,
  },
});
