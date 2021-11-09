import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PaymentMethods = () => {
    return (
        <View style={styles.row1}>
            <View>
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.meth1}>
                <Image source={require("../Assets/Mastercard.png")} />
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.meth1}>
                <Image source={require("../Assets/Paypal.png")} />
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.meth2}>
                <Image source={require("../Assets/Stripe.png")} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default PaymentMethods

const styles = StyleSheet.create({
    touch:{
        height:50,
        width:50,
        borderRadius:50,
        borderColor:"#000000",
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        borderStyle:"dashed"
        
    },
    plus:{
        fontSize:22,
        fontWeight:"400"
    },
    meth1:{
        height:50,
        width:50,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        borderRadius:10,
        paddingRight:3
    },
    meth2:{
        height:50,
        width:50,
        justifyContent:"flex-start",
        alignItems:"flex-start",
        borderRadius:10,
        
    },
    row1:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        paddingLeft:24,
        paddingRight:61,
        marginTop:28

    }
   
})
