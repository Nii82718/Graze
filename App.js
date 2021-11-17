import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/login';
import Cart from './screens/cart';





export default function App() {

  const NewNavi = createStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
       <NewNavi.Navigator screenOptions = {{headerShown: false}}
       initialRouteName = "Login">

        <NewNavi.Screen name = "Login" component={Login} />
        <NewNavi.Screen name = "Home" component={Home} />
        <NewNavi.Screen name = "Cart" component={Cart} />
      
        
        
        
        
      </NewNavi.Navigator>
     </NavigationContainer>
     <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
