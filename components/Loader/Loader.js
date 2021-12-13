import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        flex: 1

    }
});

export default function Loader() {

    return (


        <View style={styles.container}>

            <Image
                source={require("../../assets/images/loader.jpg")}

                style={{
                    width: 150, height: 100,

                }} />

        </View>


    )
}