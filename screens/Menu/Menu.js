import React, { useEffect, useMemo, useState } from "react";
import {
    View, Text, FlatList, Alert,
    Image
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TabView from "../../components/TabBar/TabView";
import { api } from "../../components/api/base";
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { TouchableHighlight } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import constants from "../../components/constants/constants";
import Loader from "../../components/Loader/Loader";



export default MenuItem = ({ navigation }) => {
    const[Loading,setLoading]=useState(false)


    useEffect(() => {
        home_page()
    }, [])





    const [data, setData] = useState([])
    const [data_data, setDataData] = useState([])
    const [feature_data, setFeatureData] = useState([])
    const [best, setBest] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const home_page = () => {

        api
            .get(`/categories`, {

            })
            .then(([success, response]) => {

                if (success) {
                    setData(response?.data || [])
                    Alert.alert("Success", response?.message)

                }
            })
            .catch((err) => {
                console.log(err);
            });
    }


    const Frankies = () => {
        return (
            <FlatList
                style={{
                    margin: -25,
                    marginTop: 25,
                    padding: 0,
                }}

                bounces={false}
                refreshing={refreshing}
                onEndReachedThreshold={0.1}
                data={data?.filter(
                    (item) =>
                        (item.cat_id) === constants.FOOD_MENU_ITEMS.FRANKIES

                )}
                renderItem={orderItem}
                keyExtractor={(item) => item?.order_number}
            />
        )
    }
    const Pastry = () => {
        return (
            <FlatList
                style={{
                    margin: -25,
                    marginTop: 25,
                    padding: 0,
                }}

                bounces={false}
                refreshing={refreshing}
                onEndReachedThreshold={0.1}
                data={data?.filter(
                    (item) =>
                        (item.cat_id) === constants.FOOD_MENU_ITEMS.PASTRY

                )}
                renderItem={orderItem}
                keyExtractor={(item) => item?.cat_id}
            />
        )
    }
    const Combo_meal = () => {

        return (
            <FlatList
                style={{
                    margin: -25,
                    marginTop: 25,
                    padding: 0,
                }}

                bounces={false}
                refreshing={refreshing}
                onEndReachedThreshold={0.1}
                data={data?.filter(
                    (item) =>
                        (item.cat_id) === constants.FOOD_MENU_ITEMS.COMBO_MEAL

                )}
                renderItem={orderItem}
                keyExtractor={(item) => item?.child_data?.cat_id}
            />
        )
    }
    const Smoothies = () => {

        return (
            <FlatList
                style={{
                    margin: -25,
                    marginTop: 25,
                    padding: 0,
                }}

                bounces={false}
                refreshing={refreshing}
                onEndReachedThreshold={0.1}
                data={data?.filter(
                    (item) =>
                        (item.cat_id) === constants.FOOD_MENU_ITEMS.SMOOTHIES

                )}
                renderItem={orderItem}
                keyExtractor={(item) => item?.cat_id}
            />
        )
    }
    const Cakes = () => {

        return (
            <FlatList
                style={{
                    margin: -25,
                    marginTop: 25,
                    padding: 0,
                }}

                bounces={false}
                refreshing={refreshing}
                onEndReachedThreshold={0.1}
                data={data?.filter(
                    (item) =>
                        (item.cat_id) === constants.FOOD_MENU_ITEMS.CAKES

                )}
                renderItem={orderItem}
                keyExtractor={(item) => item?.cat_id}
            />
        )
    }
    const Breads = () => {

        return (
            <FlatList
                style={{
                    margin: -25,
                    marginTop: 25,
                    padding: 0,
                }}

                bounces={false}
                refreshing={refreshing}
                onEndReachedThreshold={0.1}
                data={data?.filter(
                    (item) =>
                        (item.cat_id) === constants.FOOD_MENU_ITEMS.BREADS

                )}
                renderItem={orderItem}
                keyExtractor={(item) => item?.cat_id}
            />
        )
    }
    const Ice_Creams = () => {

        return (
            <FlatList
                style={{
                    margin: -25,
                    marginTop: 25,
                    padding: 0,
                }}

                bounces={false}
                refreshing={refreshing}
                onEndReachedThreshold={0.1}
                data={data?.filter(
                    (item) =>
                        (item.cat_id) === constants.FOOD_MENU_ITEMS.ICE_CREAMS

                )}
                renderItem={orderItem}
                keyExtractor={(item) => item?.cat_id}
            />
        )
    }
    const Beverages = () => {

        return (
            <FlatList
                style={{
                    margin: -25,
                    marginTop: 25,
                    padding: 0,
                }}

                bounces={false}
                refreshing={refreshing}
                onEndReachedThreshold={0.1}
                data={data?.filter(
                    (item) =>
                        (item.cat_id) === constants.FOOD_MENU_ITEMS.BEVERAGES

                )}
                renderItem={orderItem}
                keyExtractor={(item) => item?.cat_id}
            />
        )
    }
    const Daily_Specials = () => {

        return (
            <FlatList
                style={{
                    margin: -25,
                    marginTop: 25,
                    padding: 0,
                }}

                bounces={false}
                refreshing={refreshing}
                onEndReachedThreshold={0.1}
                data={data?.filter(
                    (item) =>
                        (item.cat_id) === constants.FOOD_MENU_ITEMS.DAILY_SPECIALS

                )}
                renderItem={orderItem}
                keyExtractor={(item) => item?.cat_id}
            />
        )
    }
    const Food_Menu = () => {

        return (
            <FlatList
                style={{
                    margin: -25,
                    marginTop: 25,
                    padding: 0,
                }}

                bounces={false}
                refreshing={refreshing}
                onEndReachedThreshold={0.1}
                data={data?.filter(
                    (item) =>
                        (item.cat_id) === constants.FOOD_MENU_ITEMS.FOOD_MENU

                )}
                renderItem={orderItem}
                keyExtractor={(item) => item?.cat_id}
            />
        )
    }
    const orderItem = ({ item, index, separators }) => {
        
        return (
            <View
                key={item?.cat_id}
                style={{
                    borderWidth: 1,
                    borderColor: "rgba(151,173,182, 0.3)",
                    borderRadius: 20,
                    padding: 10,
                    marginLeft: 15,
                    height: 490
                }}
            >
                <View
                    style={{
                        borderRadius: 15,
                        backgroundColor: "white",
                        padding: 15,
                        marginLeft: 5,
                    }}
                >
                    <View

                    >

                        <Image
                         source={{uri: item?.cat_img}}
                         style={{ height: 200, width: 200 }}

                     />



                    </View>
                </View>

                <View
                    style={{
                        marginTop: 10,
                        flexDirection: "row"
                    }}
                >
                    {item?.is_veg == 2 ?
                        <>
                            <Feather
                                name="square"
                                size={24}
                                color="red"
                            />
                            <Octicons name="primitive-dot" size={24} color="red"
                                style={{

                                    left: -18,
                                    top: 0

                                }} />
                        </> :
                        <>
                            <Feather
                                name="square"
                                size={24}
                                color="green"
                            />
                            <Octicons name="primitive-dot" size={24} color="green"
                                style={{
                                    left: -18,
                                    top: 0
                                }} />
                        </>
                    }

                    <Text
                        style={{

                            fontSize: 15,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {" "}
                        {item?.cat_name}
                    </Text>


                </View>

                <View style={{ flexDirection: "row" }}>
                    
                    <Text style={{ color: "red", left: 13, fontSize: 15 }}>C ${item?.price}</Text>
                    <Text style={{ color: "gray", textDecorationLine: "line-through", left: 15 }}> C $ {item?.special_price}</Text>
                    <Text style={{ color: "gray", left: 35 }}>Options availible</Text>
                    <TouchableHighlight
                   
                        onPress={()=>navigation.navigate('order',{id:item?.cat_id})}>
                    
                    <View style={{
                                backgroundColor: "red",
                                height: 20, width: 50,
                                borderRadius: 5,  left: 200
                            }}>
                                <Text style={{ color: "white", left: 10 }}>ADD</Text>
                            </View>
                    </TouchableHighlight>
                </View>
            </View>

        )
    }

    const tabs = useMemo(
        () => [

            
            {
                label: "Smoothies",
                scene: Smoothies,
            },
            {
                label: "Cakes",
                scene: Cakes,
            },
            
            {
                label: "Ice Creams",
                scene: Ice_Creams,
            },
             {
                label: "Daily Specials",
                scene: Daily_Specials,
            },
            {
                label: "Food Menu",
                scene: Food_Menu,
            },
        ],
        [data]
    );
    if(!Loading)
    return (


        <>
            <SafeAreaView style={{ backgroundColor: "white" }}>
                <ScrollView>
                    <View>
                        <TabView tabs={tabs} />

                    </View>
                </ScrollView>

            </SafeAreaView>

        </>
    )
    else{
        return <Loader />
    }
}