import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import CounterSmall  from './CounterSmall'
const OrdersComplete = () => {
    return (
        <View style={styles.align}>
            <View style={styles.burger}>
            <Image source={require("../Assets/BurgerSmall.png")} />
            </View>
            <View style={styles.mac}>
                <Text style={styles.text1}>The Macdonalds </Text>
                <Text style={styles.text2}>Classic cheesburger</Text>
                <Text style={styles.text3}>$23.99</Text>
            </View>
            <View style={styles.count}>
            <CounterSmall />
            </View>
            <Image source={require("../Assets/Complete.png")} style={styles.complete} />
            <TouchableOpacity style={styles.again}>
            <Text style={styles.underline}>Order again</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrdersComplete

const styles = StyleSheet.create({

    align:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        width:350,
        height:112,
        marginLeft:15,
        marginRight:25,
        paddingLeft:15,
        paddingRight:10,
    
        
    },
    mac:{
        marginLeft:10
    },
    count:{
        marginLeft:22,
    
    },
    burger:{
        width:78.32,
        height:68,
        borderRadius:20,
        justifyContent:"center"
    },
    text1:{
        fontSize:16,
        fontWeight:"500",
        color:"#3D3D3D"
    },
    text2:{
        fontSize:12,
        fontWeight:"400",
        color:"#3D3D3D"
    },
    text3:{
        fontSize:16,
        fontWeight:"500",
        color:"#FE554A"
    },
    complete:{
        position:"absolute",
        right:-11,
        top:-14
    },
    again:{
        position:"absolute",
        bottom:0,
        right:30
    },
    underline:{
        fontSize:14,
        color:"#FE554A",
        textDecorationLine:"underline"
    }

})
