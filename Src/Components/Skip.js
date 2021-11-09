import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Dimensions } from 'react-native';
 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Skip = ({datas}) => {
    return (
        <View style={styles.align}>
            <Text numberOfLines={2} style={styles.text}>{datas.head}</Text>
            <Image source={datas.image} 
            style={styles.img}
            />
        </View>
    )
}

export default Skip

const styles = StyleSheet.create({
    align:{
        justifyContent:"center",
        alignItems:"center",
         
        // backgroundColor:"yellow"
    },
    text:{
        fontSize:24,
        fontWeight:"700",
        color:"#1C1C1C",
        textAlign:"center",
        // paddingHorizontal:24,
        // lineHeight:31,
        maxWidth:320
    },
    img:{
         marginTop:46,
         width:windowWidth,
         height:"60%"
        
        
    
        
    }
})
