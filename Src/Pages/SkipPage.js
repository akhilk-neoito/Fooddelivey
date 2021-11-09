import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../Components/Button';
import FlatlistSkip from '../Components/FlatlistSkip';
import Login from '../Components/Login';
import Skip from '../Components/Skip';
import TopTick from '../Components/TopTick';
import {useNavigation} from '@react-navigation/native';

const SkipPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bg}>
      <TopTick content="Skip" topClick={() => navigation.navigate("SignUpScreen")}/>
      <FlatlistSkip />
      <Button
        title="Create an account"
        buttonHndler={() => navigation.navigate('SignUpScreen')}
      />
      <Login
        content="Login"
        onLoginHandler={() => navigation.navigate('LogInScreen')}
      />
    </View>
  );
};

export default SkipPage;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fafdff',
    height: '100%',
  },
});
