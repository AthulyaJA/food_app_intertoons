import React, { useEffect, useMemo, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { api } from "../../components/api/base";
import { useIsFocused } from "@react-navigation/core";
import { TextInput } from "react-native-gesture-handler";


export default Search = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const isFocused = useIsFocused();
    const [refreshing, setRefreshing] = useState(false);
    const[sortorder,setSortOrder]=useState({
        field:"menu_name",direction:"desc"
    })
    const[onChange,setOn]=useState("")
    
    const[filer,setFilter]=useState({
        category:"category_id"
    })
    const [value, setValue] = useState({
        current_page: 1,
        pagesize: 100,
        searchstring: null,
        start_date: "",
        end_date: "",
        order_category: "",
        order_status: " ",
        isNextPage: false,
    });

    useEffect(() => {
        if (isFocused) callOrderApi(1, true);
    }, [isFocused]);
    const handleFilter = () => {
        setShowFilter(false);
        setValue({
            ...value,
            current_page: 1,
        });
        callOrderApi(1);
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          if (value?.searchstring !== null || value?.searchstring === "") {
            callOrderApi(1);
          }
        }, 500);
    
        return () => clearTimeout(delayDebounceFn);
      }, [value?.searchstring]);
    
    
console.log(value?.searchstring)
    const callOrderApi = (current_page = 1, reset = false,field,direction,category) => {
        setRefreshing(true);
        api
            .post(
                "/products",
                !reset
                    ? {
                        ...value,
                        current_page: current_page,
                        ...sortorder,
                        ...filer,
                        searchstring:onChange
                    }
                    : {
                        current_page: current_page,
                    }
            )
            .then(([success, response]) => {
                if (success) {

                    console.log(response)
                    // if (current_page === 1) setData(response["data"]["data"]);
                    // else setData([...data, ...response["data"]["data"]] || []);
                    // var lastPage = response?.data?.last_page;
                    // if (current_page != lastPage)
                    //     setValue((item) => ({
                    //         ...item,
                    //         pagesize: lastPage,
                    //         current_page: current_page + 1,
                    //     }));
                    setRefreshing(false);
                }
            })
            .catch((err) => {
                setRefreshing(false);
                console.log(err);
            });
    };
    return (

        <>
            <View>

            <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TextInput
          viewStyle={{
            flex: 1,
          }}
          style={{
            flex: 1,
            paddingLeft: 40,
            color: "#505050",
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 10,
            fontSize: 16,
            borderRadius: 6,
          }}
          icon="search"
          iconColor="#1152FD"
          iconPosition="left"
          placeholder="Search Keyword"
          iconSize={20}
          name="searchstring"
          value={value?.searchstring}
          onChangeText={(onChange)=>setOn(onChange)}
         
        />
        </View>
            </View>
        </>
    )
}