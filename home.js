
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Category from './components/Explore/catergory';
import { render } from 'react-dom';
import { Component } from 'react/cjs/react.production.min';
import { NavigationContainer } from '@react-navigation/native';
import Cat2 from './components/Explore/cat2';
import Cat3 from './components/Explore/cat3';
import { Ionicons } from '@expo/vector-icons'; 





 

const Home =({navigation}) => {
    return (
      <ScrollView>
     <View style= {styles.container}>
      <View style={[{flexDirection:'row', alignItems:'center', marginBottom: 0, marginTop: 45}]}>
        <View style={[{flex:1,flexDirection:'row', paddingLeft: 15}]}>
          <TouchableOpacity  onPress = {() => navigation.navigate('Settings')}>
        <Ionicons name="settings" size={26} color="black" />
        </TouchableOpacity>
        </View>
      
        
         <View style={[{justifyContent:'center', marginVertical:10, marginRight: 20, paddingRight: -35, padding: 1}]}>
             <TextInput placeholder = "Search Item..." placeholderTextColor="#BDC3C7"  style= {{borderStyle: 'solid', width: 250, borderWidth: 2, borderRadius: 20, paddingLeft: 5, padding: 9}}>
             </TextInput>
         </View>
         <TouchableOpacity style= {{flex:1,flexDirection:'row', marginTop: 13, paddingRight: 15}}  onPress = {() => navigation.navigate('Cart')}> 
        <AntDesign name="shoppingcart" size={27} color="black" />
         </TouchableOpacity>
      </View>

        <View style={{ padding: 5, borderRadius: 10, width: 350, marginLeft: 13, backgroundColor: '#DD33FF', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 22 }}>
             LISTED ITEMS
          </Text>
        </View><><ScrollView scrollEventThrottle={16} alwaysBounceVertical={false}>
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, height: 200 }}>
        <View style={{ width: 200, borderWidth: 2, paddingHorizontal: 20, borderRadius: 5, marginLeft: 6, backgroundColor: 'black', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: 22, FontWeight: '900', color: 'white' }}>  Smart Phones </Text>
            <Text style={{ marginLeft: 70, fontWeight: '700' }}>Slide to view</Text>
        </View>
        <View style={{ height: 140, marginTop: 20 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Category imageUri={require('../assets/iphone-11-Pro-Max-midnight-green-back.jpg')} name="Iphone 11 pro" />


                <Category imageUri={require('../assets/iphonexdesign.jpg')} name="Iphone x" />


                <Category imageUri={require('../assets/03_Product_Image_Ocean_Blue_galaxynote9_l30_pen_blue_RGB.jpg')} name="Samsung Note 9" />



                <Category imageUri={require('../assets/Samsung--Galaxy-S20-FE-688.jpg')} name="Samsung galaxy S20" />
            </ScrollView>
        </View>
    </View>
</ScrollView><ScrollView scrollEventThrottle={16} alwaysBounceVertical={false}>
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, height: 200 }}>
            <View style={{ width: 200, borderWidth: 2, paddingHorizontal: 20, borderRadius: 5, marginLeft: 6, backgroundColor: 'yellow', alignItems: 'center' }}>
                <Text style={{ fontSize: 22, FontWeight: '900', color: 'white' }}>
                    Headsets
                </Text>
            </View>
            <View style={{ height: 140, marginTop: 20 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Category imageUri={require('../assets/Bb_blue.jpg')} name="Blue" />


                    <Category imageUri={require('../assets/photo-1593005510509-d05b264f1c9c.jpg')} name="Red" />


                    <Category imageUri={require('../assets/download.jpg')} name="All Black" />


                    <Category imageUri={require('../assets/Flag_of_Libya_(1977-2011,3-2)svg.png')} name="Green" />
                </ScrollView>
            </View>
        </View>
    </ScrollView><ScrollView scrollEventThrottle={16} alwaysBounceVertical={false}>
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, height: 200 }}>
            <View style={{ width: 200, borderWidth: 2, paddingHorizontal: 20, borderRadius: 5, marginLeft: 6, backgroundColor: 'black', alignItems: 'center' }}>
                <Text style={{ fontSize: 22, FontWeight: '900', color: 'white' }}>  Speakers </Text>
            </View>
            <View style={{ height: 140, marginTop: 20 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Category imageUri={require('../assets/apple-airpods-max-db-800x450-1609400328.webp')} name="Air Pods Max" />


                    <Category imageUri={require('../assets/614bL2rQtcL._AC_SX679_.jpg')} name="Galaxy Buds" />


                    <Category imageUri={require('../assets/ps5-playstation-5-sony-hoyle-promo.jpg')} name="Playstation 5" />


                    <Category imageUri={require('../assets/fd9cc3cc-3533-4eec-a87d-e6abcc77aae7.0e7d395789bb5e75eb627b80cfe78b13.jpeg')} name="Blue JBL" />
                </ScrollView>
            </View>
        </View>
    </ScrollView></>


    </View>
  </ScrollView>

     

    );
  } 

export default Home;

    
   
    
       
        
      
      
 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingBottom: 120
    
  },
});