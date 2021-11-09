import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Skip from './Skip'


const data =[
    {
        id:1,
        head:"Order from your favourite stores or vendors",
        image:require("../Assets/Mobile.png")
    },
    {
        id:2,
        head:"Choose from a wide range of  delicious meals",
        image:require("../Assets/Meal.png")
    },
    {
        id:3,
        head:"Enjoy instant delivery and payment",
        image:require("../Assets/Man.png")
    },

]

const FlatlistSkip = () => {
    return (
        <View>
            <FlatList 
            horizontal={true}
            pagingEnabled={true}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={item =>(
                <Skip datas={item.item} />
            )}
                />
        </View>
    )
}

export default FlatlistSkip

const styles = StyleSheet.create({
    
})
