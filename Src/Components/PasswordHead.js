import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PasswordHead = (props) => {
    return (
        <View style={styles.align}>
            <Text style={styles.text1}>{props.head}</Text>
            <Text numberOfLines={2} style={styles.text2}>{props.body}</Text>
        </View>
    )
}

export default PasswordHead

const styles = StyleSheet.create({
    align:{
        justifyContent:"center",
        marginHorizontal:44,
        marginTop:50,
        alignItems:"center"
    },
    text1:{
        fontSize:24,
        fontWeight:'700',
        color:"#1C1C1C",
        textAlign:"center"
        
    },
    text2:{
        fontSize:14,
        fontWeight:'400',
        color:"#3D3D3D",
        textAlign:"center",
        width:250,
        marginTop:15
    }
})
