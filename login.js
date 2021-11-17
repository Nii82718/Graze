import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { ImageBackground } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

export default function Login({navigation}) {
  

  return (
    <View style={{backgroundColor: '#5DADE2', flex: 1}}>
     

       <ImageBackground
           style={{flex: 1, alignItems: 'center', paddingBottom: 120}}
           blurRadius= {0}
           source={{url: 'https://previews.123rf.com/images/assiapix/assiapix2006/assiapix200600144/149672530-mock-up-mobile-phone-inside-shopping-cart-or-trolley-on-yellow-background-online-shopping-ecommerce-.jpg'}}>


            <Text style= {{color: '#FDFEFE', fontSize: 27, FontWeight: 'bold', marginTop: 100, fontFamily: 'sans-serif'}}>GRAZER</Text>
            <Text style= {{color: '#FDFEFE', fontSize: 22, FontWeight: 50, marginTop: 50, fontStyle: 'normal', paddingRight: 270, marginBottom: 45}}>LOGIN</Text>
            <Text style= {{color: '#FDFEFE', fontSize: 13, FontWeight: 50,  fontStyle: 'normal', paddingRight: 220, marginBottom: 2}}>   E-mail or Username*</Text>
            <View style= {styles.username}>
            <Ionicons name="person-circle" size={24} color="black" />
            <TextInput style= {{borderBottomWidth: 2, width: 280, marginRight: 50, marginBottom: 25, fontSize: 15}} ></TextInput>
            </View>
            <Text style= {{color: '#FDFEFE', fontSize: 17, FontWeight: 55,  fontStyle: 'normal', paddingRight: 275, marginBottom: 2,}}>   Password*</Text>
            <View style= {styles.password}>
            <FontAwesome name="lock" size={24} color="black" />
            <TextInput secureTextEntry= {true} style= {{borderBottomWidth: 2, width: 280, marginRight: 50, marginBottom: 14, fontSize: 15, }} ></TextInput>
            </View>
            <TouchableOpacity>
              <Text style={{fontStyle: 'normal', marginLeft: 200, FontWeight: 'bold', fontSize: 20, marginBottom: 15}}>Retrieve Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 10, backgroundColor: '#DD33FF', marginTop: 20, paddingHorizontal: 120, marginBottom: 15, borderRadius: 20}} onPress= {() =>navigation.navigate('Home')}>
              <Text style={{ color: '#FDFEFE', fontSize: 18}}>SUBMIT</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style= {{borderRadius: 20, paddingHorizontal: 8, padding: 5, backgroundColor: '#AEB6BF', alignItems: 'center', flexDirection: 'row'}} onPress= {() =>navigation.navigate('Home')}>
              <Text style={{ color: 'black', padding: 5, fontSize: 18}}>
              <AntDesign name="google" size={23} color="#D35400"   />  Login With google
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 0, backgroundColor: 'black', paddingHorizontal: 55, borderRadius: 25, marginTop: 80, paddingTop: 0}}>
              <Text style={{color:'white', marginTop: 15, marginBottom: 15}}>REGISTER NOW!</Text>
              </TouchableOpacity>
    


             
           
            
            
            
            
        </ImageBackground>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});