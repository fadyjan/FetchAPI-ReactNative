import React from 'react'
import { View, Text ,Image ,StyleSheet} from 'react-native'


const post = ({ route }) => {

    const desc = route.params.item.body;
    const id = route.params.item.id;
    const image = route.params.Images;
    const title=route.params.item.title
    
    console.log(desc);
    return (

        <View>
            
            <Image  style={styles.images} source={{ uri : image+"/" +id }}></Image>
            <Text style={styles.title}>{title} </Text>
            <Text style={styles.text}> {desc}</Text>

        </View>
    )


}
const styles = StyleSheet.create({

    images: {
        justifyContent:"center",
        width: 600,
        height: 200
    },
    text:{
        textAlign:"center",
        fontSize: 30,
    },
    title:{
        textAlign:"center",
        marginVertical:20
    }

});

export default post