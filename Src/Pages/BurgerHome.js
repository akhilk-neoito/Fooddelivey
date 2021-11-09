import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DeliveryTo from '../Components/DeliveryTo'
import FlatlistBurger from '../Components/FlatlistBurger'
import FlatlistFood from '../Components/FlatlistFood'
import {useNavigation} from '@react-navigation/native';
import DrawerNavigation from '../route/DrawerNavigation'

const BurgerHome = () => {
    const navigation = useNavigation();
    return (
        <View>
            <DeliveryTo head={require("../Assets/Menu.png")} onBackHandler={()=>navigation.navigate("DrawerScreen") } />
            <Text style={styles.text}>Enjoy Delicious food</Text>
            <FlatlistFood />
            <View style={styles.align}>
                <Text style={styles.text1}>Popular restaurants</Text>
                <TouchableOpacity
                onPress={()=> navigation.navigate("ChesseScreen")}
                >
                <Text style={styles.text2}>View all(29)</Text>
                </TouchableOpacity>
            </View>
            <FlatlistBurger />
        </View>
    )
}

export default BurgerHome

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:"#3D3D3D",
        fontWeight:"700",
        marginLeft:30,
        marginTop:40
    },
    align:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:50,
        marginHorizontal:25
    },
    text1:{
        fontSize:16,
        fontWeight:"700",
        color:"#3D3D3D"
    },
    text2:{
        fontSize:14,
        color:"#FE554A",
        textDecorationLine:"underline"
    }
})
