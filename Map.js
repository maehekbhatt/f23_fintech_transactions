import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
//import Marker from 'react-native-maps';
import { useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';


export default function MapScreen() {
 const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
 const university = {
   latitude: 30.285304534663968,
   longitude: -97.73343808555092,
   latitudeDelta: 0.005,
   longitudeDelta: 0.004,
 }


 const pcl = {
   latitude: 30.282674299590273,
   longitude: -97.73811387406639
 }
 const greg = {
   latitude: 30.284289025385444,
   longitude: -97.73663766776612
 }
 const tower = {
   latitude: 30.286241801651144,
   longitude: -97.73951014261338
 }
 const pma = {
   latitude: 30.28922985621054,
   longitude: -97.73647854783661
 }
 const kins = {
   latitude: 30.2903332957183,
   longitude: -97.7399773880691
 }
 const gdc = {
   latitude: 30.286371926289302,
   longitude: -97.73637734852659
 }


 return (
   // <View className="<MapPage>">
   //   {!isLoaded ? (
   //     <Text>Loading...</Text>
      
   //   ) : (
   //     <GoogleMap
   //       mapContainerClassName="map-container"
   //       center={center}
   //       zoom={10}
   //     />
   //   )}
   // </View>
   <View style={styles.container}>
     {/* <MapView style={styles.map}
     initialRegion={university}>
       <MapView.Marker coordinate={pcl}/>
     </MapView> */}


<MapView ref={MapView => (this.MapView = MapView)}
        style={styles.map}
        initialRegion={university}>
         <Marker coordinate={pcl} ></Marker>
         <Marker coordinate={greg} ></Marker>
         <Marker coordinate={tower} ></Marker>
         <Marker coordinate={pma} ></Marker>
         <Marker coordinate={kins} ></Marker>
         <Marker coordinate={gdc} ></Marker>           
     </MapView>
     <Text style={styles.description}>Pick your trading location:</Text>
   </View>
  );
 }


const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 map: {
   width: '100%',
   height: '50%',
 },
 description: {
   fontSize: 14,
   color: '#000000',
   fontFamily: 'HelveticaNeue-Thin',
   marginBottom: 15,
   marginTop: 15,
   marginLeft: 15,
 }
 });

