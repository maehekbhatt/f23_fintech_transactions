import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ItemPage({ navigation }) {
  return (
    <View style={styles.container}>
        <TouchableOpacity
        onPress = {
            () => {
                console.log("back button pressed");
                navigation.navigate('ProductListing');
            }
        }
        >
        <Image
            source={require('./assets/backArrow.png')}
            style={{width: 20, height: 20, left: 18, top: -14}}
        />
        </TouchableOpacity>
        
      <Image
            source={require('./assets/itemPagePic.png')}
            style={styles.productImage}
          />
        <Text style={styles.productName}>Product Name</Text>
        <Text style={styles.productPrice}>$----</Text>
        <Text style={styles.productLabel}>Condition/Brand</Text>
        <Text style={styles.productDescription}>Lorem ipsum dolor sit amet consectetur. Nibh morbi arcu egestas volutpat in nunc faucibus lorem. Leo id risus enim sem fames ac enim scelerisque tristique. Sem nunc semper maecenas eu. At quam elit eget nec elementum aliquet viverra.</Text>
        <Text style={styles.productOwnerInfo}>Posted by John Doe, jd12345</Text>
        <TouchableOpacity style={styles.chatButton}>
            <Text style={{fontSize: 20, fontFamily:'HelveticaNeue', textAlign: 'center', color: '#FFFFFF'}}>Chat</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 70,
    },
    productImage: {
       width: 475,
       height: 250,
      
    }, 
    productName: {
        fontSize: 23,
        fontFamily: 'HelveticaNeue-Thin', 
        fontWeight: 'regular',
        left: 32, 
        top: 15
    },
    productPrice: {
        fontSize: 30,
        fontWeight: 'bold',
        left: 32, 
        top: 20,
    }, 
    productLabel: {
        fontFamily: 'HelveticaNeue-Thin',
        fontWeight: 'regular', 
        color: 'grey', 
        left: 32,
        paddingTop: 23, 
    },
    productDescription: {
        fontFamily: 'HelveticaNeue-Thin',
        fontWeight: 'regular',
        left: 32,
        paddingTop: 12, 
        paddingRight: 50
    },
    productOwnerInfo: {
        fontFamily: 'HelveticaNeue-Thin',
        fontWeight: 'regular', 
        color: 'grey', 
        left: 32,
        paddingTop: 23, 
    },
    chatButton: {
        backgroundColor: '#6341C3',
        top: 25,
        width: 125,
        paddingVertical: 9,
        borderRadius: 50,
        alignSelf: 'center', // Align the button itself to the center of its parent
    }
      
    

});