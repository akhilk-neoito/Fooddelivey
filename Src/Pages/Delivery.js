import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Adress from '../Components/Adress'
import Button from '../Components/Button'
import PaymentMethods from '../Components/PaymentMethods'
import {useNavigation} from '@react-navigation/native';

const Delivery = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={styles.del}>Delivery Method</Text>
           <Adress />
            <Text style={styles.pay}>Payment</Text>
            <PaymentMethods />
            <View style={styles.circle}>
            <TouchableOpacity style={styles.round}></TouchableOpacity>
            <Text style={styles.payon}>Pay on arrival</Text>
            </View>
            <Text style={styles.red}>Pay with cash/POS upon arrival </Text>
            <View style={styles.fee}>
                <Text style={styles.textmain}>Delivery Fee</Text>
                <Text style={styles.dollar}>$20</Text>
            </View>
            <View style={styles.total}>
                <Text style={styles.textmain}>Subtotal</Text>
                <Text style={styles.dollar}>$520</Text>
            </View>
            <View style={styles.border}></View>
            <View style={styles.tot}>
                <Text style={styles.textmain}>Total</Text>
                <Text style={styles.dollar1}>$540</Text>
            </View>
            <Button title="Proceed to payment"  buttonHndler={()=> navigation.navigate("PaymentScreen") }/>
            <TouchableOpacity style={styles.back} 
            onPress={()=>navigation.goBack()}
            >
                <Image source={require("../Assets/Back.png")} />
            </TouchableOpacity>
        </View>
    )
}

export default Delivery

const styles = StyleSheet.create({
    del:{
        fontSize:24,
        fontWeight:"700",
        color:"#3D3D3D",
        marginLeft:24,
        marginTop:48
    },
  
    pay:{
        fontSize:24,
        fontWeight:"700",
        color:"#3D3D3D",
        marginLeft:24,
        marginTop:48
    },
    round:
    {
        height:15,
        width:15,
        borderWidth:1,
        borderColor:"#1C1C1C",
        borderRadius:15
    },
    circle:{
        flexDirection:"row",
        marginLeft:42,
        marginTop:40,
        justifyContent:"flex-start",
        alignItems:"center"
    },
    payon:{
        marginLeft:13,
        fontSize:15,
        color:"#000000"
    },
    red:{
        marginLeft:31,
        marginTop:23,
        fontSize:12,
        color:"#FE554A"
    },
    fee:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:22,
        marginTop:30
    },
    total:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:22,
        marginTop:9,
        marginBottom:10
    },
    tot:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:22,
        marginTop:15
    
    },
    border:{
        borderTopWidth:0.3,
        borderTopColor:"#000000"
    },
    textmain:{
        fontSize:15,
        color:"#000000"
    },
    dollar:{
        fontSize:16,
        fontWeight:"500",
        color:"#3D3D3D"
    },
    dollar1:{
        fontSize:24,
        fontWeight:"700",
        color:"#3D3D3D"
    },
    back:{
        position:"absolute",
        top:20,
        left:20
    }
})
