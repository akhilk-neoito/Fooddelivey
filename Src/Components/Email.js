import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Email = (props) => {

    const [text, setText] = React.useState("");
    const [button,setButton] = React.useState(false)
    const onHandler = ()=>{
        setButton(!button)
    }

    return (
        <View style={styles.topp}>
        <View style={styles.main}>
        <Text style={styles.head}>{props.title}</Text>
        </View>
        <View style={styles.top}>
            <TouchableOpacity 
            onPress={onHandler}
            />
           
           <TextInput 
           style={styles.mail}
           onChangeText={(text)=>setText(text)}
           value={text}
           placeholder={props.place}
           keyboardType="email-address"
   
           />
        </View>
        </View>
    )
}

export default Email

const styles = StyleSheet.create({
    mail:{
        width:334,
        height:50,
        borderRadius:15,
        borderColor:"#DFE2E5",
        borderWidth:1,
        paddingLeft:23,
        backgroundColor:"white"
       
    },
    top:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },
    head:{
        fontSize:12,
        color:"#3D3D3D",
        

    },
    main:{
    marginHorizontal:44
    },
    topp:{
        marginTop:50
    }
})
