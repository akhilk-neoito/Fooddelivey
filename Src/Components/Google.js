import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Google = (props) => {
    return (
        <View style={[styles.align,props.top]}>
            <TouchableOpacity style={styles.touch}>
            <Image source={require("../Assets/google.png")} />
            <Text style={styles.text}>Sign-in with Google</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Google

const styles = StyleSheet.create({
    text:{
        fontSize:14,
        color:"#000000",
        marginLeft:11,
        textDecorationLine:'underline'
        
    },
    align:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:30
    },
    touch:{
        width:204,
        height:50,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        backgroundColor:"white"
        
    }
})
