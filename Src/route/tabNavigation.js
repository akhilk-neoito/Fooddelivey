import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BurgerHome from '../Pages/BurgerHome';
import YourCart from '../Pages/YourCart';
import Sucessfull from '../Pages/Sucessfull';
import Payment from '../Pages/Payment';
import Delivery from '../Pages/Delivery';
import YourOrders from '../Pages/YourOrders';
import ChesseBurger from '../Pages/ChesseBurger';
import FavouriteScreen from '../Pages/Favourite.Screen';
import NotificationScreen from '../Pages/Notification.Screen';
import HomeeStack from './HomeeStack';


const Icon=({focused}) =>{
    return(
        <Image source={require("../Assets/HomeIcon.png")}
        style={{ tintColor:focused==true?"orange":"#2d3436"}}
        />
    )
}
const CartIcon = ({focused}) =>{
  return(
  <Image source={require("../Assets/IconBuy.png")} 
  style={{ tintColor:focused==true?"orange":"#2d3436"}}
  />
  )
}

const FavIcon = ({focused}) =>{
  return(
  <Image source={require("../Assets/IconLove.png")} 
  style={{ tintColor:focused==true?"orange":"#2d3436"}}
  />
  )
}
const NotifyIcon =({focused}) =>{
  return(
    <Image source={require("../Assets/IconBell.png")} 
    style={{ tintColor:focused==true?"orange":"#2d3436"}}
    />
  )
}

const tabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer
    independent={true} 
    >
      <Tab.Navigator
      initialRouteName={BurgerHome}
      screenOptions={{
        headerShown: false
      }}
      >
        <Tab.Screen name="HomeScreen" component={HomeeStack}
        options={{
            tabBarLabel:"Home",
            tabBarIcon:({focused}) =>( <Icon focused={focused} />),
            
        }}
        />
        
        <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} 
      options={{
        tabBarLabel:"Fav",
        tabBarIcon:({focused}) =>(<FavIcon focused={focused} />)
      }}
      />

        <Tab.Screen name="CartScreen" component={YourCart}
        options={{
          tabBarLabel:"Cart",
          tabBarIcon:({focused}) =>(<CartIcon focused={focused} />)
        }}
        />
        <Tab.Screen name="NotificationScreen" component={NotificationScreen} 
        options={{
          tabBarLabel:"Notification",
          tabBarIcon:({focused}) =>(<NotifyIcon focused={focused} />)
        }}
        
        />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default tabNavigation;

const styles = StyleSheet.create({});
