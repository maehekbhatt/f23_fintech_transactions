import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
              <TouchableOpacity style={[styles.logInButton]} onPress={null}>
        <Image
              style={[styles.menu, {marginTop: 70, marginLeft: 10, marginBottom: -100}]}
              source={require("./assets/main/menuicon.png")}
            />
        </TouchableOpacity>
      <View style={styles.searchContainer}>
        <Text style={styles.title}>Welcome John Doe</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Blandit.
        </Text>
        <TextInput
          style={[styles.searchInput, { marginTop: 30 }]}
          placeholder="What do you want to find?"
          fontFamily="HelveticaNeue-Thin"
          placeholderTextColor="black"
        />
      </View>

      <View style={styles.mainContent}>
      <Text style={[styles.buttonText, { marginTop: 10, marginBottom: 10}]}>
              Browse Categories
            </Text>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProductListing");
            }}
          >
            <Image
              source={require("./assets/main/clothes.png")}
              style={[styles.image, { marginRight: 50 }]}
            />
            <Text style={[styles.buttonText, { marginLeft: 50 }]}>
              Clothing
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Image 2 clicked")}>
            <Image
              source={require("./assets/main/electronics.png")}
              style={styles.image}
            />
            <Text style={[styles.buttonText, { marginLeft: 44 }]}>
              Electronics
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProductListing");
            }}
          >
            <Image
              source={require("./assets/main/exercise.png")}
              style={[styles.image, { marginRight: 50 }]}
            />
            <Text style={[styles.buttonText, { marginLeft: 50 }]}>
              Exercise
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Image 2 clicked")}>
            <Image
              source={require("./assets/main/furniture.png")}
              style={styles.image}
            />
            <Text style={[styles.buttonText, { marginLeft: 50 }]}>
              Furniture
            </Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
        <Image
              source={require("./assets/main/map.png")}
              style={[styles.menu, {marginTop: 10}]}
            />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  searchContainer: {
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#EBEBEB",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "300",
    fontFamily: "HelveticaNeue-Thin",
    textAlign: "left",
    marginTop: 50,
  },
  description: {
    fontSize: 13,
    fontFamily: "HelveticaNeue-Thin",
    textAlign: "left",
    marginTop: 20,
  },
  mainContent: {
    flex: 1,
    padding: 20,
    alignItems: "center", // Center items horizontally
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'HelveticaNeue-Thin',
  },
  menu: {
    transform: [{ scale: 0.5 }]
  },
});
