import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '../Components/Button'
import Chesse from '../Components/Chesse'
import Counter from '../Components/Counter'
import DeliveryTo from '../Components/DeliveryTo'
import {useNavigation} from '@react-navigation/native';
import YourCart from './YourCart'

const ChesseBurger = () => {
    const navigation = useNavigation();
    return (
        <View>
        <DeliveryTo head={require("../Assets/Back.png")} onBackHandler={()=>navigation.goBack()}  />
        <View style={styles.top}>
        <View style={styles.burg}>
        <Image source={require("../Assets/Burg.png")} />
        </View>
        </View>
        <View style={styles.count}>
        <Counter />
        </View>
        <Chesse />
        <Button title="Add to cart" buttonHndler={()=> navigation.navigate("CartScreen") } />
        </View>
    )
}

export default ChesseBurger

const styles = StyleSheet.create({
    burg:{
        justifyContent:"center",
        alignItems:"center",
        width:258,
        height:224,
        borderRadius:20,
        
    },
    top:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
    },
    count:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    }
})
