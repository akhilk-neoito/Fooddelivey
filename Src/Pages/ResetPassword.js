import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Button from '../Components/Button'
import PasswordHead from '../Components/PasswordHead'
import TopTick from '../Components/TopTick'
import {useNavigation} from '@react-navigation/native';

const ResetPassword = () => {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState(null);
    return (
        <View>
            <TopTick content="Cancel" underline={styles.line} topClick={() => navigation.goBack()}/>
            <PasswordHead head="Reset Password" body="A reset code has been sent to your email" />
            <Text style={styles.text1}>Enter code</Text>
            <View style={styles.main}>
            <TextInput 
              style={styles.pass}
              onChangeText={onChangeText}
              value={text}
              keyboardType="numeric"
            />
            </View>
            <Button title="Reset Password" buttonHndler={() => navigation.navigate('LogInScreen')}/>
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    line:{
        textDecorationLine:"underline",
        fontSize:14,
        fontWeight:"400"
    },
    text1:{
        textAlign:"center",
        fontSize:12,
        color:"#3D3D3D",
        marginTop:57
    },
    pass:{
        width:200,
        height:40,
        borderWidth:1,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    main:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:40,
        marginBottom:20
    }
})
