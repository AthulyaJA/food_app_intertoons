
import { StyleSheet, Text, View,Button,FlatList,Image,TouchableOpacity, ScrollView} from "react-native";
import React,{useState} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Router,Stack,Scene} from 'react-native-router-flux'
import Order_summary from "./screens/Order_summary/Order_summary";
const Routes = () => {

  return(

    <>
<Router>
<Stack key="root"  hideNavBar={true}>
  <Scene key="login" component={Order_summary}/>
 
</Stack>

  </Router>
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





export default Routes;