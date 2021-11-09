import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from './Button'
const Chesse = () => {
    return (
        <View>
            <Text style={styles.head}>Big boys Cheese burger</Text>
            <View style={styles.icons}>
                <View style={styles.star}>
                    <Image source={require("../Assets/Star.png")} />
                    <Text style={styles.text}>4+</Text>
                </View>
                <View style={styles.fire}>
                <Image source={require("../Assets/Fire.png")} />
                    <Text style={styles.text}>300cal</Text>
                </View>
                <View style={styles.clock}>
                <Image source={require("../Assets/Time.png")} />
                    <Text style={styles.text}>5-10min</Text>
                </View>
            </View>
            <Text style={styles.body} numberOfLines={4}>Our simple, classic cheeseburger begins with a 100% pure beef burger seasoned with just a pinch of salt and pepper. The McDonald’s Cheeseburger is topped</Text>
            <Text style={styles.topp}>Toppings for you</Text>
            
        </View>
    )
}

export default Chesse

const styles = StyleSheet.create({
    head:{
        fontSize:24,
        fontWeight:"700",
        color:"#3D3D3D",
        textAlign:"center",
        marginTop:35
    },
    icons:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:75,
        marginTop:10
    },
    star:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    fire:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    clock:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    text:{
        fontSize:11,
        color:"#3D3D3D",
        marginLeft:5
    },
    body:{
        fontSize:14,
        marginLeft:36,
        marginRight:30,
        color:"#3D3D3D",
        marginTop:20
    },
    topp:{
        fontSize:16,
        fontWeight:"500",
        color:"#3D3D3D",
        marginLeft:30,
        marginTop:20
    }
})
