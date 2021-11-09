import React, {useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Alert} from 'react-native'



const Counter = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        if( count <= 4){
      setCount(count + 1);
        }else {
            Alert.alert('Warning:', 'items cannot be more than 5', [{text:'ok'}])
        }
    };
    const decerement = () => {
        if (count > 1){
      setCount(count - 1);
        }else {
            Alert.alert('Warning:', 'items cannot be 0', [{text:'ok'}])
        }
    };
  
    return (
        <View style={styles.main}>
        <View>
            <TouchableOpacity 
            style={styles.button1}
            onPress={decerement}
            >
                <Text style={styles.sub}>-</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.pad}>{count}</Text>
            </View>
            <View>
                <TouchableOpacity 
            style={styles.button2}
            onPress={increment}
            >
                <Text style={styles.add}>+</Text>
                </TouchableOpacity>
        </View>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    button1:{
        height:24,
        width:24,
        backgroundColor:"#F9881F",
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    button2:{
        height:24,
        width:24,
        backgroundColor:"#F9881F",
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    pad:{
        fontSize:14,
        fontWeight:"700",
        color:"white"
    },
    main:{
        backgroundColor:"#F9881F",
        width:100,
        height:50,
        borderRadius:30,
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row"
    },
    sub:{
        color:"white",
        fontSize:14,
        fontWeight:"700"
    },
    add:{
        color:"white",
        fontSize:14,
        fontWeight:"700"
    }
})
