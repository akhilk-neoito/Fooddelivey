import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Burger from './Burger'

const data=[
    {
        id:1,
        image:require("../Assets/BigBurger.png"),
        head:"Big cheese burger",
        body:"No 10 opp lekki phase 1 bridge in sangotedo estate",
        star:"4+"
    },
    {
        id:2,
        image:require("../Assets/BigBurger.png"),
        head:"Medium cheese burger",
        body:"No 10 opp lekki phase 1 bridge in sangotedo estate",
        star:"5+"
    },
    {
        id:3,
        image:require("../Assets/BigBurger.png"),
        head:"Big cheese burger",
        body:"No 10 opp lekki phase 1 bridge in sangotedo estate",
        star:"6+"
    }
]

const FlatlistBurger = () => {
    return (
        <View>
            <FlatList 
            horizontal={true}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={item =>(
                <Burger datas={item.item}/>
            )}

            />
        </View>
    )
}

export default FlatlistBurger

const styles = StyleSheet.create({})
