import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { TouchableHighlight } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { api } from "../../components/api/base";
import constants from "../../components/constants/constants";
import Loader from "../../components/Loader/Loader";
import { Button } from "react-native";
import { Actions } from "react-native-router-flux";



export default Home = ({ navigation }) => {

    useEffect(() => {
        home_page()
        home_page_one()
    }, [])





    const [data, setData] = useState([])
    const [data_data, setDataData] = useState([])
    const [feature_data, setFeatureData] = useState([])
    const [best, setBest] = useState([])
    const [checked, setChecked] = useState([1, 2])
    const [checked_non, setCheckedNon] = useState(2)
    const [fav, setFav] = useState({})
    const [Loading, setLoading] = useState(false)
    const[modal,setModal]=useState()

const go_order=()=>{
    Actions.order()
}

    const home_page = () => {
        setLoading(true)

        api
            .get(`/home`, {

            })
            .then(([success, response]) => {

                if (success) {
                    setData(response?.data?.slider_banners)
                    setFeatureData(response?.data?.featured_products)
                    setBest(response?.data?.bestseller_products)
                    setLoading(false)


                }
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            });
    }
    const home_page_one = () => {

        api
            .get(`/categories`, {

            })
            .then(([success, response]) => {

                if (success) {

                    setDataData(response?.data || [])



                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const orderItem = ({ item, index, separators }) => {
        return (
            <View
                key={item.id}
                style={{
                    borderBottomWidth: 1,
                    marginBottom: 10,
                    borderBottomColor: "#dedede",
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
                            source={{ uri: item?.banner_img }}
                            style={{ height: 200, width: 450 }}

                        />
                    </View>
                </View>

            </View>

        )
    }

    const exploreItem = ({ item, index, separators }) => {


        return (
            <View
                key={item.cat_id}
                style={{
                    borderWidth: 1,
                    borderColor: "rgba(151,173,182, 0.3)",
                    borderRadius: 20,
                    padding: 10,
                    marginLeft: 15,
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
                            source={{ uri: item?.cat_img }}
                            style={{ height: 80, width: 90 }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
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

            </View>

        )
    }
    const bestItem = ({ item, index, separators }) => {
        return (
            <TouchableWithoutFeedback
            key={item.id}
            onPress={()=>{
                setModal(true)
            }}>
            <View
                
                style={{
                    borderWidth: 1,
                    borderColor: "rgba(151,173,182, 0.3)",
                    borderRadius: 20,
                    padding: 10,
                    marginTop: 10,

                }}
            >
                <View
                    style={{
                        borderRadius: 15,
                        backgroundColor: "white",
                        padding: 15,
                        marginLeft: 5,
                        top: 10,

                    }}
                >
                    <View
                        style={{ flexDirection: "row" }}
                    >
                        <Image
                            source={{ uri: item?.image }}
                            style={{ height: 80, width: 90 }}

                        />
                        <TouchableOpacity
                            >
                            <View
                            style={{
                                backgroundColor: "red",
                                height: 20, width: 50,
                                borderRadius: 5, top: 60, left: 20
                            }}>
                                <Text style={{ color: "white", left: 10 }}>ADD</Text>
                            </View>

                        </TouchableOpacity>


                        {item?.is_veg == 2 ?
                            <>
                                <Feather
                                    name="square"
                                    size={24}
                                    color="red"
                                    style={{

                                        left: -40,
                                        top: 0

                                    }}
                                />
                                <Octicons name="primitive-dot" size={24} color="red"
                                    style={{

                                        left: -58,
                                        top: 0

                                    }} />
                            </> :
                            <>
                                <Feather
                                    name="square"
                                    size={24}
                                    color="green"
                                    style={{

                                        left: -40,
                                        top: 0

                                    }}
                                />
                                <Octicons name="primitive-dot" size={24} color="green"
                                    style={{
                                        left: -58,
                                        top: 0
                                    }} />
                            </>
                        }
                        <Text
                            style={{
                                left: -48,
                                top: 0,
                                fontSize: 20,
                                color: "gray"
                            }}>
                            {item?.name}
                        </Text>
                    </View>
                    <View
                        style={{

                            left: 200,
                            top: -30,
                            flexDirection: "row"



                        }}>
                        <Text style={{ color: "red", fontSize: 15 }}>C${item?.price}</Text>
                        <Text style={{
                            color: "gray",
                            textDecorationLine: "line-through", left: 15
                        }}
                        >C${item?.special_price}</Text>
                        {fav == 1 ?
                            <TouchableWithoutFeedback
                                key={item?.cat_id} >
                                <MaterialIcons

                                    name="favorite-border" size={24} color="gray"
                                    style={{ marginLeft: 50 }}
                                    onPress={(checked) => { setFav(constants.FAV_ITEMS.UNLIKE) }} />
                            </TouchableWithoutFeedback> :

                            <MaterialIcons name="favorite" size={24} color="red"
                                style={{ marginLeft: 50 }} onPress={(checked_non) => { setFav(constants.FAV_ITEMS.LIKE) }} />
                        }
                    </View>
                    <Text style={{
                        color: "gray", left: 200,
                        top: -30,
                    }}>Options availible</Text>



                </View>
                <Text
                    style={{

                        fontSize: 14,
                        justifyContent: "center",
                        alignItems: "center",
                        top: -30,
                    }}
                >
                    {" "}
                    {item?.description}
                </Text>

            </View>
            </TouchableWithoutFeedback>

        )
    }
    const featuredItem = ({ item, index, separators }) => {
        return (
            <View
                key={item.id}
                style={{
                    borderWidth: 1,
                    borderColor: "rgba(151,173,182, 0.3)",
                    borderRadius: 20,
                    padding: 10,
                    marginLeft: 15,
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
                            source={{ uri: item?.image }}
                            style={{ height: 150, width: 200 }}

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
                        {item?.name}
                    </Text>


                </View>

                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                     >
                        <View>
                            <Text style={{ color: "red", paddingLeft: 3 }}>ADD</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: "red", left: 13, fontSize: 15 }}>C ${item?.price}</Text>
                    <Text style={{ color: "gray", textDecorationLine: "line-through", left: 15 }}> C $ {item?.special_price}</Text>
                    <Text style={{ color: "gray", left: 35 }}>Options availible</Text>
                </View>
            </View>

        )
    }

    if (!Loading)
        return (

            <>
                <SafeAreaView style={{ backgroundColor: "white" }} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Text
                                style={{ fontStyle: "normal", fontSize: 20, marginTop: 20, marginLeft: 5, color: "black" }}
                            >Deliver to</Text>
                            <Text style={{ fontSize: 10, color: "gray" }}>Akhil Bavan P.O</Text>
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <FlatList
                                horizontal
                                data={data || []}
                                renderItem={orderItem}
                                keyExtractor={(item) => item?.banner_order?.toString()}
                                showsVerticalScrollIndicator={false}
                                nestedScrollEnabled={true}
                            />
                        </View>
                        <Text
                            style={{ fontStyle: "normal", fontSize: 20, marginTop: 20, marginLeft: 5, color: "black" }}
                        >Explore Menu</Text>
                        <View style={{ paddingTop: 10 }}>
                            <FlatList
                                horizontal
                                data={data_data || []}
                                renderItem={exploreItem}
                                keyExtractor={(item) => item?.cat_id}
                                showsVerticalScrollIndicator={false}
                                nestedScrollEnabled={true}
                            />

                        </View>
                        <Text
                            style={{ fontStyle: "normal", fontSize: 20, marginTop: 20, marginLeft: 5, color: "black" }}
                        >Featured </Text>
                        <View style={{ paddingTop: 10 }}>
                            <FlatList
                                horizontal
                                data={feature_data || []}
                                renderItem={featuredItem}
                                keyExtractor={(item) => item?.id?.toString()}
                                showsVerticalScrollIndicator={false}
                                nestedScrollEnabled={true}
                            />
                        </View>
                        <Text
                            style={{ fontStyle: "normal", fontSize: 20, marginTop: 20, marginLeft: 5, color: "black" }}
                        >Best Seller </Text>
                        <View style={{ paddingTop: 10 }}>
                            <FlatList

                                data={best || []}
                                renderItem={bestItem}
                                keyExtractor={(item) => item?.id?.toString()}
                                showsVerticalScrollIndicator={false}
                                nestedScrollEnabled={true}

                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )

    else {
        return (
            <>
                <Loader />
            </>
        )
    }
}

