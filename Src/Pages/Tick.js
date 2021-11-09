import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Tick = () => {
    return (
       <TouchableOpacity style={styles.Tick}>
           <Image source={require("../Assets/Tick.png")} />
       </TouchableOpacity>
    )
}

export default Tick

const styles = StyleSheet.create({
    Tick:{
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        height:"100%"
    }
})
