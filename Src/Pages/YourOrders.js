import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OrdersComplete from '../Components/OrdersComplete'

const YourOrders = () => {
    return (
        <View>
            <Text style={styles.orders}>Your orders</Text>
            <View style={styles.align}>
            <Text style={styles.text1}>Complete orders</Text>
            <Text style={styles.text2}>Pending orders</Text>
            </View>
            <View>
            <OrdersComplete />
            </View>
            <View style={styles.top}>
            <OrdersComplete />
            </View>
            <View style={styles.top}>
            <OrdersComplete />
            </View>
        </View>
    )
}

export default YourOrders

const styles = StyleSheet.create({
    orders:{
        fontSize:24,
        fontWeight:"700",
        color:"#3D3D3D",
        marginLeft:24,
        marginTop:48
    },
    align:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:35,
        marginTop:36,
        marginBottom:51.25
    },
    text1:{
        fontSize:16,
        color:"#000000",
        fontWeight:"700",
        borderBottomWidth:2
    },
    text2:{
        fontSize:16,
        fontWeight:"700",
    },
    top:{
        marginTop:34
    }
})
