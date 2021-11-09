import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountHead from './Src/Components/AccountHead'
import Burger from './Src/Components/Burger'
import Button from './Src/Components/Button'
import Counter from './Src/Components/Counter'
import CounterSmall from './Src/Components/CounterSmall'
import DeliveryTo from './Src/Components/DeliveryTo'
import Email from './Src/Components/Email'
import FlatlistBurger from './Src/Components/FlatlistBurger'
import FlatlistFood from './Src/Components/FlatlistFood'
import FlatlistSkip from './Src/Components/FlatlistSkip'
import Food from './Src/Components/Food'
import Google from './Src/Components/Google'
import Item from './Src/Components/Item'
import Login from './Src/Components/Login'
import OrdersComplete from './Src/Components/OrdersComplete'
import Password from './Src/Components/Password'
import PasswordHead from './Src/Components/PasswordHead'
import Skip from './Src/Components/Skip'
import TopTick from './Src/Components/TopTick'
import BurgerHome from './Src/Pages/BurgerHome'
import ChesseBurger from './Src/Pages/ChesseBurger'
import CreateAccount from './Src/Pages/CreateAccount'
import Delivery from './Src/Pages/Delivery'
import ForgetPassword from './Src/Pages/ForgetPassword'
import LoginAccount from './Src/Pages/LoginAccount'
import Payment from './Src/Pages/Payment'
import ResetPassword from './Src/Pages/ResetPassword'
import SkipPage from './Src/Pages/SkipPage'
import Sucessfull from './Src/Pages/Sucessfull'
import Tick from './Src/Pages/Tick'
import YourCart from './Src/Pages/YourCart'
import YourOrders from './Src/Pages/YourOrders'
import tabNavigation from './Src/route/tabNavigation';
import HomeeStack from './Src/route/HomeeStack';
import DrawerNavigation from './Src/route/DrawerNavigation';

const Stack = createNativeStackNavigator();


const App = () => {
  return (

    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName={SkipPage}
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="SlideScreen" component={SkipPage} />
      <Stack.Screen name="SignUpScreen" component={CreateAccount} />
      <Stack.Screen name="LogInScreen" component={LoginAccount} />
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPassword} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPassword} />
      <Stack.Screen name="HomeStack" component={tabNavigation} />
     {/* <Stack.Screen name="DrawerScreen" component={DrawerNavigation} /> */}
      
      
      
      
    </Stack.Navigator>
  </NavigationContainer>
   



//<YourOrders />
  
  )
}

export default App

const styles = StyleSheet.create({})
