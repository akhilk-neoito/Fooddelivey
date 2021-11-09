import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Button = (props) => {
    return (
        <View style={styles.align}>
        <TouchableOpacity 
        onPress={props.buttonHndler}
        >
            <LinearGradient colors={['#F9881F', '#FF774C']} 
            style={styles.btn}
            start={{y:0.0, x:0.3}} end={{y:1, x:1}}
            locations={[0,0.5,0.6]}>
            <Text style={styles.text}>{props.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    btn:{
        width:335,
        height:51,
        // backgroundColor:"orange",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    align:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    },
    text:{
        fontSize:14,
        fontWeight:"700",
        color:"white"
    }
})
