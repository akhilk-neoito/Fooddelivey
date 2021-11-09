import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AccountHead from '../Components/AccountHead'
import Button from '../Components/Button'
import Email from '../Components/Email'
import Google from '../Components/Google'
import Login from '../Components/Login'
import Password from '../Components/Password'
import TopTick from '../Components/TopTick'
import {useNavigation} from '@react-navigation/native';

const CreateAccount = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.bg}>
            <TopTick content="Skip" underline={styles.line} />
            <AccountHead  head="Create an account" body="Welcome friend, enter your details so lets get started in ordering food."/>
            <Email title="Email Address" place="Enter email"/>
            <Password title="Password" place="Enter password"/>
            <Password title="Confirm Password" place="Confirm Password"/>
            <Google />
            <Button
        title="Create an account"
        buttonHndler={() => navigation.navigate('LogInScreen')}
      />
      <Login
        content="Login to my account"
        onLoginHandler={() => navigation.navigate('LogInScreen')}
      />
        </View>
    )
}

export default CreateAccount

const styles = StyleSheet.create({
    bg:{
        backgroundColor:"#fafdff",
        height:"100%"
    },
    line:{
        textDecorationLine:"underline",
        fontSize:14,
        fontWeight:"400"
    }
})
