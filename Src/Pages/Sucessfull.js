import React from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import Button from '../Components/Button'
import {useNavigation} from '@react-navigation/native';

const Sucessfull = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.top}>
        <View style={styles.sucess}>
            <Image source={require("../Assets/Sucess.png")} />
            </View>
        
            <View style={styles.one}>
            <Text style={styles.text1}>Your order has been successfully placed</Text>
            </View>
            <View style={styles.two}>
            <Text style={styles.text2}>Sit and relax while your orders is being worked on . It’ll take 5min before you get it</Text>
        </View>
        <View style={styles.butt}>
        <Button title="Go back to home" buttonHndler={()=> navigation.navigate("HomeScreen")}  />
        </View>
        <TouchableOpacity style={styles.back} 
            onPress={()=>navigation.goBack()}
            >
                <Image source={require("../Assets/Back.png")} />
            </TouchableOpacity>
        </View>
    )
}

export default Sucessfull

const styles = StyleSheet.create({
    sucess:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:150
},
text1:{
    fontSize:24,
    fontWeight:'700',
    color:"#3D3D3D",
    textAlign:"center"
},
text2:{
    fontSize:15,
    fontWeight:'400',
    color:"#3D3D3D",
    textAlign:"center"
},
one:{
    width:252,
    height:62,
    marginTop:25
  
},
two:{
    width:296,
    height:46,
    marginTop:15
},
top:{
    justifyContent:"center",
    alignItems:"center",
},
butt:{
    marginTop:120
},
back:{
    position:"absolute",
    top:20,
    left:20
}

})
