import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DeliveryTo = (props) => {
  return (
    <View style={styles.view1}>
       
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text style={styles.text1}>Delivery to</Text>
          <Image source={require("../Assets/ArrowDown.png")} style={styles.arrow}/>
        </View>
        <Text style={styles.text2}>lekki phase 1, Estate</Text>
      </View>
      <Image source={require("../Assets/ManTop.png")} style={styles.man}/>
      <TouchableOpacity  style={styles.menu} 
      onPress={props.onBackHandler}
      >
      <Image source={props.head}/>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryTo;

const styles = StyleSheet.create({
    view3:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    view2:{
        justifyContent:"center",
        alignItems:"center"
    },
    view1:{
       marginTop:25,
       justifyContent:"center",

       
    },
    man:{
        position:"absolute",
        right:0,
        top:2
    },
    arrow:{
        marginLeft:10
    },
    text1:{
        fontSize:14,
        color:"#1C1C1C",
        textDecorationLine:"underline"
    },
    text2:{
        fontSize:15,
        color:"#FE554A"
    },
    menu:{
        position:"absolute",
        left:21,
        width:40,
        height:40,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center"
    }
});
