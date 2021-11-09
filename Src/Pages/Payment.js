import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TextInput, View,TouchableOpacity,Image } from 'react-native'
import Button from '../Components/Button';
import {useNavigation} from '@react-navigation/native';

const Payment = () => {
    const [text, onChangeText] = React.useState(null);
    const [date, onChangeDate] = React.useState(null);
    const [cvv, onChangeCvv] = React.useState(null);
    const navigation = useNavigation();
    
    return (
        <View>
            <Text style={styles.pay}>Payment</Text>
            <View style={styles.one}>
            <Text style={styles.details}>Card details</Text>
            <View style={styles.align}>
            <TextInput
             style={styles.card}
             onChangeText={onChangeText}
             value={text}
             placeholder="Enter card details"
             
            />
            </View>
            </View>
            <View style={styles.bot}>
                <View>
                <Text style={styles.expdate}>Exp date</Text>
                <View style={styles.exp}>
                <TextInput
             style={styles.date}
             onChangeText={onChangeDate}
             value={date}
             placeholder="DD/MM"
            
             
            />
                </View>
                </View>
                <View>
                <Text style={styles.expdate}>CVV</Text>
                <View style={styles.exp}>
                <TextInput
             style={styles.date}
             onChangeText={onChangeCvv}
             value={cvv}
             placeholder="Enter CVV"
            
             
            />
                </View>
                </View>
            </View>
            <View style={styles.bt}>
            <Button title="Pay now" buttonHndler={()=> navigation.navigate("SucessScreen") } />
            </View>
            <TouchableOpacity style={styles.back} 
            onPress={()=>navigation.goBack()}
            >
                <Image source={require("../Assets/Back.png")} />
            </TouchableOpacity>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    pay:{
        fontSize:24,
        fontWeight:"700",
        color:"#3D3D3D",
        marginLeft:24,
        marginTop:48
    },
    card:{
        width:334,
        height:50,
        borderRadius:15,
        marginTop:10,
        paddingLeft:23,
        borderWidth:1,
        borderColor:"#DFE2E6"
    },
    align:{
        alignItems:"center",
        justifyContent:"center",
    },
    one:{
        marginTop:50
    },
    details:{
        marginLeft:44,
        fontSize:12,
        color:"#3D3D3D"
    },
    date:{
        width:157,
        height:50,
        borderRadius:15,
        paddingLeft:10.81,
        borderWidth:1,
        borderColor:"#DFE2E6"
    },
    exp:{
        justifyContent:"center",
        alignItems:"center"
    },
    bot:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:21,
        marginTop:20
    },
    expdate:{
        fontSize:12,
        color:"#3D3D3D",
        marginLeft:5,
        marginBottom:10
    },
    bt:{
        marginTop:275
    },
    back:{
        position:"absolute",
        top:20,
        left:20
    }
})
