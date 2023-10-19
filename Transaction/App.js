import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Login';
import HomeScreen from './Home';
import SignupScreen from './Signup';

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UT Safe Trade">
        <Stack.Screen
          name="UT Safe Trade"
          component={UTSafeTrade}
          options={{ title: 'UT Safe Trade', headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: 'Sign Up', headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const UTSafeTrade = ({ navigation }) => {
  const navigateLogin = () => {
    // Navigate to the new page when the button is pressed
    navigation.navigate('Login');
  };

  const navigateSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UT Safe Trade</Text>
      <Text style={styles.description}>Build 0.0</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { right: 10 }]} onPress={navigateLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { left: 10 }]} onPress={navigateSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99b989',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#ecf0f1',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#355c7d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});