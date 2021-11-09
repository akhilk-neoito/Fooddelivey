import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Google from '../Components/Google';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import axios from 'axios';


const NotificationScreen = () => {
  const [data, setData] = useState([]);
  // const getItems = async () => {
    // const res = await Axios.post('https://reqres.in/api/users', {
    //   name: 'akhil',
    //   email: 'akJDWDH@gmail.com',
    //   phn: 46857857,
    //   age: '1555',
    // });
    
    // const res= await Axios(
    //     {
    //         method:"get",
    //         url:"https://jsonplaceholder.typicode.com/photos",
            // data:{
            //   email: "eve.holt@reqres.in",
            //   password: "cityslicka"
            // }
            
        
  //   )
  //   console.log(res.data, 'Res1');
  // };
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(({data}) =>{
      setData(data)
      
    })
    return () => {
      // Cleanup function
      console.log("unmount")
  }
  }, []);
  return (
    <View>
    
      <FlatList 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        console.log("item", item)
        return(
          <View style={styles.top}>
          <View style={styles.card}>
             <Text style={styles.ids}>{item.title}</Text>
         <Image source={{uri:item.url}} style={styles.img} />
        
         {/* <Image source={{uri:item.thumbnailUrl}} /> */}
          </View>
          </View>
        )
        
      }}/>
    </View>
  );
    }

export default NotificationScreen;

const styles = StyleSheet.create({
 ids:{
   textAlign:"center",
   marginVertical:10,
   color:"white",
   fontSize:15,
   fontWeight:"700",
   marginHorizontal:10
 },
 img:{
   height:40,
   width:30
 },
 card:{
   justifyContent:"center",
   alignItems:"center",
   height:150,
   width:300,
   backgroundColor:"#ffb84d",
   marginVertical:20,
   borderRadius:20,
   paddingBottom:10
 },
 top:{
   justifyContent:"center",
   alignItems:"center"
 }
});
