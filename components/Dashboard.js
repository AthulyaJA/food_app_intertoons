import React, { Component, useState } from 'react';
import { Feather, EvilIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ButtonGroup,
  Alert, Linking, CheckBox, ScrollView, Block, Animated,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { Actions } from 'react-native-router-flux'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Account from '../screens/Account/Account';
import MenuItem from '../screens/Menu/Menu';
import Search from '../screens/Search/Search';
import Home from '../screens/Home/Home';
import {Router,Scene} from 'react-native-router-flux'
import Order_summary from '../screens/Order_summary/Order_summary';







function AccountBar({navigation}) {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Account />
    </View>
  );
}

function MenuBar({navigation}) {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <MenuItem />
    </View>
  );
}

function SearchBar({navigation}) {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Search />
    </View>
  );
}
function HomeBar({navigation}) {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Home />
    </View>
  );
}







const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();
function orderStack({navigation}){
  return(<>
  <Stack.Navigator
     name="order"
     >
       <Stack.Screen
       component={Order_summary}
       name="order">

       </Stack.Screen>

     </Stack.Navigator>
  
  </>)
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255,45,85)'
  }
}
function Dashboard() {

  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>


      <Tab.Navigator



        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            }
            else if (route.name === 'Menu') {
              iconName = focused ? 'menu' : 'menu';
            }
            else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            }
            else if (route.name === 'Account') {
              iconName = focused ? 'account-circle' : 'account-circle';
            }


            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',


        })}
      >
        <Tab.Screen name="Home" component={HomeBar} options={{ headerShown: false }} />
        <Tab.Screen name="Menu" component={MenuBar} options={{ headerShown: false }} />
        <Tab.Screen name="Search" component={SearchBar} options={{ headerShown: false }} />
        <Tab.Screen name="Account" component={AccountBar} options={{ headerShown: false }} />
        <Tab.Screen name='order' component ={orderStack} />
        
    </Tab.Navigator>
    </View>
  );
}
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  inputContainer: {
    borderBottomColor: '#1b1b1b',
    // backgroundColor: '#FFFFFF',
    backgroundColor: "#1b1b1b",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 350,
    height: 45,
    marginBottom: 20,
    color: "#000000",
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    color: "white"

  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 25,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 130,
    borderRadius: 30,



  },
  loginButton: {
    backgroundColor: "#ffff00",
  },
  classButton: {
    backgroundColor: "#444947",
    width: 450,
    height: 45,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    fontSize: 30
    //  borderRadius:30,
  },
  classButtonin: {
    backgroundColor: "#131414",
    width: 450,
    height: 400,

    // justifyContent: 'center',
    //  alignItems: 'center',
    marginBottom: 50,

    fontSize: 30
    //  borderRadius:30,
  },
  classButtonwyld: {
    backgroundColor: "#343635",
    width: 100,
    height: 20,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:50,
    fontSize: 9,
    marginLeft: 3,
    marginTop: 100,
    borderRadius: 100,
  },
  classButtonwyldx: {
    backgroundColor: "#343635",
    //   width:400,
    //   height:1000,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:50,
    fontSize: 9,
    marginLeft: 3,
    marginTop: 100,
    borderRadius: 30,
  },
  loginText: {
    color: '#000000',
    fontSize: 15
  },
  login: {
    marginRight: 200,

  },
  text: {
    fontSize: 30,
    color: '#fff8dc'
  }
  ,
  intext: {
    color: '#fff8dc'
  },
  mainContainer: {
    marginTop: 60
  },
  fgpass: {

    color: "#ffff00",
    marginLeft: 150,

  }
  ,
  create: {
    color: "#ffff00",
  },
  account: {
    color: "#ffffff"
  }, terms: {
    marginTop: 100,
    justifyContent: 'center',
  },
  modalbut: {
    backgroundColor: "#ffff00",
  },
  modal: {
    backgroundColor: "#0f1110",
    borderRadius: 20,
    marginLeft: 10
    , width: 370,



  },
  modalcontent: {
    color: "#E2E8E5",
    marginTop: 20,
    fontSize: 17,
    justifyContent: 'center',



  },
  modalterms: {
    fontSize: 20,
    color: "#E2E8E5",
    marginLeft: 15
  },
  top: {
    marginTop: 30
  }
  ,
  close: {
    marginTop: 10,
    marginLeft: 340
  }
  , accountmember: {
    color: "white",
    textAlign: "center",
    justifyContent: 'center',
    marginLeft: 100
  },
  checkboxrow: {
    flexDirection: 'row',
    marginLeft: 50
  }
  ,
  accountp: {
    marginLeft: 80,
    color: "white",
  },


  container: {


    zIndex: 2,
  },
  shadow: {


    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
  },
  menu: {

    paddingTop: 8,
    paddingBottom: 16,
  },
  titleContainer: {
    alignItems: 'center',

    borderRadius: 21,
    marginRight: 9,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  containerShadow: {
    shadowColor: 'black',

    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  menuTitle: {
    fontWeight: '600',
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonleft: {
    marginLeft: 30,
    borderRadius: 30,

  },
  mainclass: {
    flexDirection: 'row',

  },
  classbody: {
    flex: 1,
    backgroundColor: '#000000',
    height: 390
  },

  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    width: 500,
    height: 100,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  container: {
    flex: 1,
  },

});
