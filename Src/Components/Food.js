import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Food = ({datas}) => {
    return (
        
           
            <View style={styles.flat}>
                <Image source={datas.image} />
                <Text style={styles.text}>{datas.food}</Text>
        

        </View>
    )
}

export default Food

const styles = StyleSheet.create({
   
    flat:{
        borderRadius:50,
        borderColor:"#F0CAC1",
        borderWidth:1,
        width:81.75,
        height:109,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:22,
        marginTop:50
    },
    text:{
        fontSize:12,
        color:"#000000"
    }
})
