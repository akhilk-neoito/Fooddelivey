import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'

const Adress = () => {
    return (
        <View>
            <View style={styles.add}>
                <Text numberOfLines={2} style={styles.text1}>137 Teaticket Hwy, East Falmouth MA 2536</Text>
                <TouchableOpacity>
                <Text style={styles.orange}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.phn}>
                <Text style={styles.text2}>+234 9011039271</Text>
                <TouchableOpacity>
                <Text style={styles.orange}>Change</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Adress

const styles = StyleSheet.create({
    add:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:26,
        marginRight:19,
        marginTop:32
    },
    phn:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:26,
        marginRight:19,
        marginTop:17
    },
    text1:{
        width:211,
        height:46,
        lineHeight:23,
        fontSize:15,
        color:"#000000"
    },
    text2:{
        fontSize:15,
        color:"#000000"
    },
    orange:{
        fontSize:14,
        fontWeight:"700",
        color:"#FE554A"
    },
})
