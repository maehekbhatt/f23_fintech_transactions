import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import { auth } from "./Firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function SignUpScreen({ navigation }) {
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
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up a
        const user = userCredential.user;
        navigation.navigate('Home')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /.edu$/i; // Check if the email ends with ".edu"
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('./assets/safe-trade-icon.png')} />
      <Text style={styles.description}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Sign up with your .edu email"
        fontFamily="HelveticaNeue-Thin"
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
        spellCheck={false}
        width={300}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        fontFamily="HelveticaNeue-Thin"
        secureTextEntry={true}
        width={300}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.createButton]} onPress={handleButtonPress}>
          <Text style={styles.createButtonText}>Create Account</Text>
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
    fontSize: 40,
    fontFamily: 'HelveticaNeue-Thin',
    color: '#000000',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: 'HelveticaNeue-Thin',
    color: '#000000',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#00bfff',
    width: 200,
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderWidth: .5,
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
  createButton: {
    borderWidth: 2,
    borderColor: '#ffffff', 
    backgroundColor: '#00bfff',
    paddingVertical: 10,
    width: 300,
    borderRadius: 5,
  },
  createButtonText: {
    color: '#ffffff', 
    fontSize: 20,
    textAlign: 'center',
    top: 0,
  },
});