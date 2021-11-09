import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AccountHead = (props) => {
    return (
        <View style={styles.align}>
            <Text style={styles.text1}>{props.head}</Text>
            <Text style={styles.text2}>{props.body}</Text>
        </View>
    )
}

export default AccountHead

const styles = StyleSheet.create({
    align:{
        justifyContent:"center",
        marginHorizontal:44,
        marginTop:50
    },
    text1:{
        fontSize:24,
        fontWeight:'700',
        color:"#1C1C1C",
        
    },
    text2:{
        width:300,
        fontSize:14,
        fontWeight:'400',
        color:"#3D3D3D"
    }
})
