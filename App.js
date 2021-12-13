
import { StyleSheet, Text, View,Button,FlatList,Image,TouchableOpacity, ScrollView} from "react-native";
import React,{useState} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Router,Stack,Scene} from 'react-native-router-flux'
import Dashboard from "./components/Dashboard";
import Account from "./screens/Account/Account";
import MenuItem from "./screens/Menu/Menu";
import Search from "./screens/Search/Search";
import Home from "./screens/Home/Home";
import Order_summary from "./screens/Order_summary/Order_summary";
import Routes from "./Routes";

const App = () => {

  return(

    <>

  <NavigationContainer>
  <Dashboard />
  </NavigationContainer>
   
 
    </>
  )
    
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    marginTop:20,
    backgroundColor:'#000000',
    alignItems: "center"
  },
  
});





export default App;