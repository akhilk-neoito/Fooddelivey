import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'

const CounterSmall = () => {

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

export default CounterSmall

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
    main:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    pad:{
        marginHorizontal:8,
        fontSize:16,
        color:"#3D3D3D",
        fontWeight:"500"
    },
    sub:{
        fontSize:16,
        fontWeight:"500",
        color:"white"
    },
    add:{
        fontSize:16,
        fontWeight:"500",
        color:"white"
    }
})
