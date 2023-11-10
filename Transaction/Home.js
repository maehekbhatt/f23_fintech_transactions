import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="black"
          // Add any necessary props or event handlers for your search functionality
        />
        <Text style={styles.title}>Welcome John Doe</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur. Blandit.</Text>
      </View>

      <View style={styles.mainContent}>
        {/* Add your app's main content here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
    searchContainer: {
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#EBEBEB',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '300',
    fontFamily: 'HelveticaNeue-Thin',
    textAlign: 'left',
    marginTop: 50,
  },
  description: {
    fontSize: 13,
    fontFamily: 'HelveticaNeue-Thin',
    textAlign: 'left',
    marginTop: 20,
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
