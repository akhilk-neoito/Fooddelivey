import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../Components/Button'
import Email from '../Components/Email'
import Google from '../Components/Google'
import Login from '../Components/Login'
import PasswordHead from '../Components/PasswordHead'
import TopTick from '../Components/TopTick'
import {useNavigation} from '@react-navigation/native';

const ForgetPassword = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TopTick content="Cancel" underline={styles.line} topClick={() => navigation.goBack()}/>
            <PasswordHead head="Forgot password" body="Enter your email address to request a password reset." />
            <Email title="Email Address" place="Enter email address"/>
            <Google top={styles.topp} />
            <Button title="Verify email" buttonHndler={() => navigation.navigate("ResetPasswordScreen")} />
            
        </View>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    line:{
        textDecorationLine:"underline",
        fontSize:14,
        fontWeight:"400"
    },
    topp:{
        marginTop:200
    }
})
