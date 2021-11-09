import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Food from './Food'

const data = [
    {
        id:1,
        image:require("../Assets/Piz.png"),
        food:"Pizza"
    },
    {
        id:2,
        image:require("../Assets/Burger.png"),
        food:"Burger"
    },
    {
        id:3,
        image:require("../Assets/Hotdog.png"),
        food:"Sausage"
    },
    {
        id:4,
        image:require("../Assets/Sandwitch.png"),
        food:"Sandwitch"
    },
]

const FlatlistFood = () => {
    return (
        <View>
            <FlatList 
            horizontal={true}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={item =>(
                <Food datas={item.item} />
            )}
            />
        </View>
    )
}

export default FlatlistFood

const styles = StyleSheet.create({})
