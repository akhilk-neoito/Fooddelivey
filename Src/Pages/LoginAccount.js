import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AccountHead from '../Components/AccountHead'
import Button from '../Components/Button'
import Email from '../Components/Email'
import Google from '../Components/Google'
import Login from '../Components/Login'
import Password from '../Components/Password'
import TopTick from '../Components/TopTick'
import Tick from './Tick'
import {useNavigation} from '@react-navigation/native';

const LoginAccount = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TopTick content="Cancel" underline={styles.line}/>
            <AccountHead head="Login to your account" body="Good to see you again, enter your details below to continue ordering."/>
            <Email title="Email Address" place="Enter email"/>
            <Password title="Password" place="Enter password"/>
            <TouchableOpacity style={styles.forget}
            onPress={() => navigation.navigate("ForgetPasswordScreen")}
            >
                <Text style={styles.tex}>Forget Password ?</Text>
            </TouchableOpacity>
            <Google top={styles.topp} />
            <Button title="Login to my account" buttonHndler={() => navigation.navigate("HomeStack")} />
            
        </View>
    )
}

export default LoginAccount

const styles = StyleSheet.create({
    line:{
        textDecorationLine:"underline",
        fontSize:14,
        fontWeight:"400"
    },
    topp:{
        marginTop:110
    },
    forget:{
        marginLeft:35,
        marginTop:10
    },
    tex:{
        color:"red",
        fontSize:12,
        textDecorationLine:"underline"
    }
})
