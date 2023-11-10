import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Login';
import HomeScreen from './Home';
import SignupScreen from './Signup';
import ImageAssets from './assets/ImageAssets'

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
      <Image style={styles.icon} source={require('./assets/safe-trade-icon.png')} />
      <Text style={styles.description}>Build 0.0</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.logInButton, {bottom: 25 , left: 153}]} onPress={navigateLogin}>
          <Text style={styles.logInButtonText}>Log In</Text>
        </TouchableOpacity>
              <TouchableOpacity style={[styles.signUpButton, {top:60, right: 145}]} onPress={navigateSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    width: 300,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  },
  icon: {
    width: 400, 
    height: 200,
  },
  signUpButton: {
    borderWidth: 2,
    borderColor: '#00bfff', 
    backgroundColor: 'white',
    paddingVertical: 10,
    width: 300,
    borderRadius: 5,
  },
  signUpButtonText: {
    color: '#00bfff', 
    fontFamily: 'HelveticaNeue-Thin',
    fontSize: 20,
    textAlign: 'center',
    top: 0,
  },
  logInButton: {
    borderWidth: 2,
    fontFamily: 'HelveticaNeue-Thin',
    borderColor: '#ffffff', 
    backgroundColor: '#00bfff',
    paddingVertical: 10,
    width: 300,
    borderRadius: 5,
  },
  logInButtonText: {
    color: '#ffffff', 
    fontSize: 20,
    textAlign: 'center',
    top: 0,
  },
});
