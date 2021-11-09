import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useNavigation} from '@react-navigation/native';
const TopTick = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.top}>
            <Image source={require("../Assets/SmallTick.png")} />
            <TouchableOpacity style={styles.touch}
            onPress={props.topClick}
            >
            <Text style={[styles.topText,props.underline]}>{props.content}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TopTick

const styles = StyleSheet.create({
    top:{
        flexDirection:"row",
        justifyContent:"center",
        marginHorizontal:30,
        marginTop:30
    },
    topText:{
        fontSize:16,
        fontWeight:"700",
        color:"#FA5A1E",
        
    },
    touch:{
        position:"absolute",
        right:0
    }
    
})
