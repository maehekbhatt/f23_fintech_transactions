import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductListing({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress = {
            () => {
                console.log("back button pressed");
                navigation.navigate('Home');
            }
        }
        >
        <Image
            source={require('./assets/backArrowClear.png')}
            style= {{left: 12, top: -5}}
        />
        </TouchableOpacity>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="What do you want to find?"
      />

      {/* Scrollable Header */}
      <View style={{height: 43}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.header}>
        <TouchableOpacity style={styles.categoryHeaderButton}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('./assets/categoryFourCircles.png')} style={{ width: 18, height: 18, marginRight: 5 }} />
          <Text style={{ color: 'white' }}>Category</Text>
        </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text>Condition</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text>Brand</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuHeaderButton}>
            <Image source={require('./assets/menuLines.png')} style={{width: 15, height: 15}}/>
          </TouchableOpacity>
          {/* Add more buttons as needed */}
        </ScrollView>
      </View>

      {/* Product Components */}
      <ScrollView style={styles.productContainer}>
        {/* Product 1 */}
        <TouchableOpacity onPress = { () => 
          {
          console.log('Product clicked');
          navigation.navigate('ItemPage');
          }}>
        <View style={styles.productItem}>
          <Image
            source={require('./assets/clothing/reeboks.webp')}
            style={styles.productImage}
          />
          <Image
          source={require('./assets/likeButton.png')}
          style={styles.productLike}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Reebok Men's Shoes</Text>
            <Text style={styles.productPrice}>$90.00</Text>
            <Text style={styles.productDescription}>New / Men's 9.5</Text>
          </View>
          <Image
          source={require('./assets/menuDots.png')}
          style={{width:6, height:18, left: -5, top:2}}
          />
        </View>
        </TouchableOpacity>

        {/* Product 2 */}
        <TouchableOpacity onPress = { () => 
          {
          console.log('Product clicked');
          navigation.navigate('ItemPage');
          }}>
        <View style={styles.productItem}>
          <Image
            source={require('./assets/clothing/aritzia.jpeg')}
            style={styles.productImage}
          />
          <Image
          source={require('./assets/likeButton.png')}
          style={styles.productLike}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Aritzia Women's Jacket</Text>
            <Text style={styles.productPrice}>$120.00</Text>
            <Text style={styles.productDescription}>Like New / XS</Text>
          </View>
          <Image
          source={require('./assets/menuDots.png')}
          style={{width:6, height:18, left: -5, top:2}}
          />
        </View>
        </TouchableOpacity>

        {/* Product 3 */}
        <TouchableOpacity onPress = { () => 
          {
          console.log('Product clicked');
          navigation.navigate('ItemPage');
          }}>
        <View style={styles.productItem}>
          <Image
            source={require('./assets/clothing/jersey.jpeg')}
            style={styles.productImage}
          />
          <Image
          source={require('./assets/likeButton.png')}
          style={styles.productLike}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Texas Longhorns Men's Football Jersey</Text>
            <Text style={styles.productPrice}>$35.00</Text>
            <Text style={styles.productDescription}>New / XL</Text>
          </View>
          <Image
          source={require('./assets/menuDots.png')}
          style={{width:6, height:18, left: -5, top:2}}
          />
        </View>
        </TouchableOpacity>

        {/* Product 4 */}
        <TouchableOpacity onPress = { () => 
          {
          console.log('Product clicked');
          navigation.navigate('ItemPage');
          }}>
        <View style={styles.productItem}>
          <Image
            source={require('./assets/clothing/asics.jpeg')}
            style={styles.productImage}
          />
          <Image
          source={require('./assets/likeButton.png')}
          style={styles.productLike}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>ASICS Women's Purple and Grey Trainers</Text>
            <Text style={styles.productPrice}>$99.00</Text>
            <Text style={styles.productDescription}>Like New / Women's 10</Text>
          </View>
          <Image
          source={require('./assets/menuDots.png')}
          style={{width:6, height:18, left: -5, top:2}}
          />
        </View>
        </TouchableOpacity>

        {/* Product 5 */}
        <TouchableOpacity onPress = { () => 
          {
          console.log('Product clicked');
          navigation.navigate('ItemPage');
          }}>
        <View style={styles.productItem}>
          <Image
            source={require('./assets/clothing/af1.jpeg')}
            style={styles.productImage}
          />
          <Image
          source={require('./assets/likeButton.png')}
          style={styles.productLike}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Nike Men's Air Force One</Text>
            <Text style={styles.productPrice}>$65.00</Text>
            <Text style={styles.productDescription}>Used / Men's 10</Text>
          </View>
          <Image
          source={require('./assets/menuDots.png')}
          style={{width:6, height:18, left: -5, top:2}}
          />
        </View>
        </TouchableOpacity>

        {/* Product 6 */}
        <TouchableOpacity onPress = { () => 
          {
          console.log('Product clicked');
          navigation.navigate('ItemPage');
          }}>
        <View style={styles.productItem}>
          <Image
            source={require('./assets/clothing/brandy.jpeg')}
            style={styles.productImage}
          />
          <Image
          source={require('./assets/likeButton.png')}
          style={styles.productLike}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Brandy Melville Women's Top</Text>
            <Text style={styles.productPrice}>$15.00</Text>
            <Text style={styles.productDescription}>Like New / S</Text>
          </View>
          <Image
          source={require('./assets/menuDots.png')}
          style={{width:6, height:18, left: -5, top:2}}
          />
        </View>
        </TouchableOpacity>

        {/* Product 7 */}
        <TouchableOpacity onPress = { () => 
          {
          console.log('Product clicked');
          navigation.navigate('ItemPage');
          }}>
        <View style={styles.productItem}>
          <Image
            source={require('./assets/clothing/hoodie.jpeg')}
            style={styles.productImage}
          />
          <Image
          source={require('./assets/likeButton.png')}
          style={styles.productLike}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Cotton On Women's Gray Hoodie</Text>
            <Text style={styles.productPrice}>$25.00</Text>
            <Text style={styles.productDescription}>Used / XL</Text>
          </View>
          <Image
          source={require('./assets/menuDots.png')}
          style={{width:6, height:18, left: -5, top:2}}
          />
        </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerButton: {
    paddingVertical: 8,
    paddingBottom: 2,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: '#DFDEFF',
    marginRight: 5,
  },
  menuHeaderButton: {
    paddingBottom: 0,
    paddingTop: 8.5,
    paddingHorizontal: 10,
    borderRadius: 70,
    backgroundColor:'#6341C3',
    marginRight: 5,
  },
  categoryHeaderButton: {
    paddingVertical: 8,
    paddingBottom: 2,
    paddingHorizontal: 15,
    paddingLeft: 12,
    borderRadius: 50,
    backgroundColor: '#6341C3',
    marginRight: 5,
  },
  productContainer: {
    flexDirection: 'column',
    top: -10
  },
  productItem: {
    flexDirection: 'row',
    marginBottom: 0,
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
  },
  productDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  productLike: {
    position: 'relative',
    width: 18, 
    height: 18,
    left: 165,
    top: 58, 
  },
  productMenu: {
    height: 10,
    width: 10,
    left: 150,
    top: 20,
  },
  productName: {
    fontSize: 14,
    fontFamily: 'HelveticaNeue-Thin', 
    fontWeight: 'regular',
    left: -13,
    top: -5, 
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    left: -13, 
    top: 0,
  },
  productDescription: {
    fontFamily: 'HelveticaNeue-Thin',
    fontWeight: 'regular', 
    color: 'grey', 
    left: -13,
    paddingTop: 3, 
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  }, 


});