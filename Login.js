import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "./Firebase"

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleButtonPress = () => {
    if (email.trim() === '' || password.trim() === '') {
      // Display an alert if either the email or password is blank
      Alert.alert('Missing Information', 'Please enter both email and password.');
    } else if (!validateEmail(email)) {
      // Display an alert for invalid email
      Alert.alert('Invalid Email', 'Please use a .edu email address.');
    } else {
      // Navigate to the new page when the input is valid
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          navigation.navigate('Home');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  const navigateSignUp = () => {
    navigation.navigate("Signup");
  };

  const validateEmail = (email) => {
    const emailRegex = /.edu$/i; // Check if the email ends with ".edu"
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Image style={[styles.icon, { marginTop: -140, marginLeft: -300, marginBottom: 100}]} source={require('./assets/login/topleftlogo.png')} />
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.description}>Sign in with UTMail to use SafeTrade</Text>
      <TextInput
        style={styles.input}
        placeholder="example@utexas.edu"
        fontFamily="HelveticaNeue-Thin"
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
        spellCheck={false}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        fontFamily="HelveticaNeue-Thin"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.logInButton]} onPress={handleButtonPress}>
        <Image
              style={styles.button}
              source={require("./assets/login/signin.png")}
            />
        </TouchableOpacity>
      </View>
      <Image style={[styles.line]} source={require('./assets/login/orline.png')} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.logInButton]} onPress={navigateSignUp}>
        <Image
              style={styles.button}
              source={require("./assets/login/createaccount.png")}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontFamily: 'HelveticaNeue',
    marginRight: 215,
    color: '#000000',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'HelveticaNeue-Thin',
    marginBottom: 20,
    marginRight: 107,
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#CDCDCD',
    borderWidth: 2,
    width: 325,
    height: 40,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
  },
  icon: {
    transform: [{scale: 0.5}]
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#EBEBEB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Thin',
    color: '#000',
  },
  logInButton: {
    marginTop: -10,
    marginBottom: -10,
    transform: [{scale: 0.5}],
  },
  logInButtonText: {
    color: '#ffffff', 
    fontSize: 20,
    textAlign: 'center',
    top: 0,
  },
  line: {
    transform: [{ scale: 0.5 }],
    marginBottom: -15,
  },
});