import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import CounterSmall from './CounterSmall'

const Item = () => {
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
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    align:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        width:350,
        height:112,
        marginHorizontal:20,
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
    }
})
