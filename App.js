import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Login";
import HomeScreen from "./Home";
import SignupScreen from "./Signup";

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UT Safe Trade">
        <Stack.Screen
          name="UT Safe Trade"
          component={UTSafeTrade}
          options={{ title: "UT Safe Trade", headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: "Sign Up", headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const UTSafeTrade = ({ navigation }) => {
  const navigateLogin = () => {
    // Navigate to the new page when the button is pressed
    navigation.navigate("Login");
  };

  const navigateSignUp = () => {
    navigation.navigate("Signup");
  };

  return (
    <ImageBackground
      source={require("./assets/background.jpeg")} // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          style={[styles.icon, { marginTop: -100, marginBottom: -20 }]}
          source={require("./assets/logo/logo.png")}
        />
        <Text style={[styles.title, { marginBottom: 40 }]}>SafeTrade</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { top: -20, left: 335 }]}
            onPress={navigateLogin}
          >
            <Image
              style={styles.button}
              source={require("./assets/home/signin.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { top: 60, right: 333, marginBottom: 100 }]}
            onPress={navigateSignUp}
          >
            <Image
              style={styles.button}
              source={require("./assets/home/createaccount.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", // Set to transparent when using ImageBackground
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' for different cover behaviors
  },
  icon: {
    transform: [{ scale: 0.5 }],
  },
  title: {
    fontSize: 55,
    fontFamily: "HelveticaNeue",
    color: "#fff",
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: "#ecf0f1",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    transform: [{ scale: 0.7 }],
  },
});
