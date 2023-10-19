import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {
  const handleButtonPress = () => {
    // Navigate to the new page when the button is pressed
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UT Safe Trade</Text>
      <Text style={styles.description}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
        spellCheck={false}
        width={300}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        width={300}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button]}
          onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99b989',
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
    backgroundColor: '#fff',
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
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
