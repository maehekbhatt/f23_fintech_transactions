import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
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
        <View style={styles.imageContainer}>
        <TouchableOpacity onPress={
          () => 
          {
          console.log('Image 1 clicked');
          navigation.navigate('ProductListing');
          }
        }>
            <Image
              source={require('./assets/main/clothes.png')}
              style={[styles.image, { marginRight: 50 }]}
            />
            <Text style={[styles.buttonText, { marginLeft: 47}]}>Button 2</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Image 2 clicked')}>
            <Image
              source={require('./assets/pics/ps5.jpeg')}
              style={styles.image}
            />
            <Text style={[styles.buttonText, { marginLeft: 47}]}>Button 2</Text>
          </TouchableOpacity>

        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
            <Text style={[styles.buttonText, { marginLeft: 47}]}>Map</Text>
          </TouchableOpacity>
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
    alignItems: 'center', // Center items horizontally
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});