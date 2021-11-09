import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Button from '../Components/Button'
import Counter from '../Components/Counter'
import CounterSmall from '../Components/CounterSmall'
import DeliveryTo from '../Components/DeliveryTo'
import Item from '../Components/Item'
import {useNavigation} from '@react-navigation/native';

const YourCart = () => {
    const navigation = useNavigation();
    return (
        <View>
            <DeliveryTo head={require("../Assets/Back.png")} onBackHandler={()=>navigation.goBack()}/>
            <Text style={styles.text}>Your cart</Text>
            <Item />
            <Item />
            <View style={styles.row}>
            <View>
                <Text style={styles.text1}>The Macdonalds </Text>
                <Text style={styles.text2}>Classic cheesburger</Text>
                <Text style={styles.text3}>$23.99</Text>
            </View>
            <CounterSmall />
            <View style={styles.icon}>
                <TouchableOpacity>
            <Image source={require("../Assets/Edit.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require("../Assets/Delete.png")} style={styles.delete} />
            </TouchableOpacity>
            </View>
            </View>
            <View style={styles.total}>
                <Text style={styles.text4}>Total</Text>
                <Text style={styles.text5}>$345</Text>
            </View>
            <Button title="Process to payment" buttonHndler={()=> navigation.navigate("DeliveryScreen")} />
        </View>
    )
}

export default YourCart

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        fontWeight:"700",
        color:"#3D3D3D",
        marginLeft:21,
        marginVertical:40

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
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:2,
        marginRight:18,
        marginTop:44
    },
    text4:{
        fontSize:14,
        color:"#3D3D3D"
    },
    text5:{
        fontSize:24,
        color:"#3D3D3D",
        fontWeight:"700"
    },
    total:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:44,
        marginHorizontal:51,
        marginTop:40,
        marginBottom:10
    
    },
    icon:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    delete:{
        marginLeft:20
    }
})
