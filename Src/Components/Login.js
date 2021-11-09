import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Login = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.align}
            onPress={props.onLoginHandler}
            >
                <Text style={styles.text}>{props.content}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    align:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:30
    },
    text:{
        fontSize:16,
        fontWeight:"700",
        color:"#FE554A"
    }
})
