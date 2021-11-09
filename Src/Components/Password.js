import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Password = (props) => {
  const [text, onChangeText] = React.useState(null);

  return (
    <View style={styles.topp}>
      <View style={styles.main}>
        <Text style={styles.head}>{props.title}</Text>
      </View>
      <View style={styles.top}>
        <TextInput
          style={styles.pass}
          onChangeText={onChangeText}
          value={text}
          placeholder={props.place}
          keyboardType="visible-password"
        />
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  pass: {
    width: 334,
    height: 50,
    borderRadius: 15,
    borderColor: '#DFE2E5',
    borderWidth: 1,
    paddingLeft: 23,
    backgroundColor:"white"
  },
  head:{
    fontSize:12,
    color:"#3D3D3D",

},
main:{
    marginHorizontal:44
    },
    top:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },topp:{
        marginTop:20
    }
});
