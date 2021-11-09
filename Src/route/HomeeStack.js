import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BurgerHome from '../Pages/BurgerHome';
import ChesseBurger from '../Pages/ChesseBurger';
import YourCart from '../Pages/YourCart';
import Delivery from '../Pages/Delivery';
import Payment from '../Pages/Payment';
import Sucessfull from '../Pages/Sucessfull';


const Stack = createNativeStackNavigator();


const HomeeStack = () => {
    return (
        <NavigationContainer
        independent={true} 
        >
            <Stack.Navigator
            initialRouteName={BurgerHome}
            screenOptions={{
              headerShown: false
            }}
           
            >
                 <Stack.Screen name="HomeScreen" component={BurgerHome} />
                <Stack.Screen name="ChesseScreen" component={ChesseBurger} />
                <Stack.Screen name="CartScreen" component={YourCart} />
                <Stack.Screen name="DeliveryScreen" component={Delivery} />
                <Stack.Screen name="PaymentScreen" component={Payment} />
                <Stack.Screen name="SucessScreen" component={Sucessfull} />



            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeeStack

const styles = StyleSheet.create({})
