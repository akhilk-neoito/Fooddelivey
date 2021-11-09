import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Burger = ({datas}) => {
    return (
        <View style={styles.main}>
            <Image source={datas.image} />
            <View>
            <Text style={styles.text1}>{datas.head}</Text>
            <Text style={styles.text2}>{datas.body}</Text>
            </View>
            <View style={styles.row}>
               <View style={styles.star}>
                <Image source={require("../Assets/Star.png")} />
                <Text>{datas.star}</Text>
                </View>
                <View>
                <Image source={require("../Assets/Heart.png")} />
                </View>
            </View>
        </View>
    )
}

export default Burger

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:200,
        paddingLeft:10,
        paddingRight:35
        
    },
    star:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    main:{
        justifyContent:"center",
        alignItems:"center",
        width:200,
        height:260,
        marginLeft:24,
        paddingLeft:15,
        borderRadius:30,
        marginTop:40
    },
    text1:{
        fontSize:16,
        fontWeight:"500",
        color:"#3D3D3D",
    },
    text2:{
        fontSize:12,
        color:"#3D3D3D"
    }
})
