import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  signInWithEmailAndPassword(auth, email, password).then(userCredential)

  const handleButtonPress = () => {
    if (email.trim() === '' || password.trim() === '') {
      // Display an alert if either the email or password is blank
      Alert.alert('Missing Information', 'Please enter both email and password.');
    } else if (!validateEmail(email)) {
      // Display an alert for invalid email
      Alert.alert('Invalid Email', 'Please use a .edu email address.');
    } else {
      // Navigate to the new page when the input is valid
      navigation.navigate('Home');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /.edu$/i; // Check if the email ends with ".edu"
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('./assets/safe-trade-icon.png')} />
      <Text style={styles.description}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Log in with your .edu email"
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
        secureTextEntry={true}
        width={300}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.logInButton]} onPress={handleButtonPress}>
          <Text style={styles.logInButtonText}>Log In</Text>
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
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#ecf0f1',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#00bfff',
    borderWidth: 2,
    width: 200,
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#355c7d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  icon: {
    width: 400, 
    height: 200,
  },
  logInButton: {
    borderWidth: 2,
    borderColor: '#ffffff', 
    backgroundColor: '#00bfff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logInButtonText: {
    color: '#ffffff', 
    fontSize: 20,
    textAlign: 'center',
    top: 0,
  },
});