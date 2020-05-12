import React from 'react'
import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity,ScrollView } from 'react-native'


const AllPosts = ({ navigation }) => {
    const [userData, setUserData] = React.useState([]);
    const [Images, setImages] = React.useState("");

    const getData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log(data);
        setUserData(data)
        const Image = "https://source.unsplash.com/random"
        setImages(Image)
        return data;

    };

    return (
        <View style={styles.container}>
            <Button title="get posts" onPress={getData} color="orange" />


            <FlatList
                data={userData}
                renderItem={({ item  }) => {
                    return (
                        
                        <TouchableOpacity >
                            <ScrollView >
                            <Text style={styles.text} onPress={()=>{
                                navigation.navigate('Post' , {item , Images})
                                
                            }}>{item.title}</Text>
                            <Image style={styles.images}
                                source={{ uri: Images + "/" + item.id }}
                            ></Image>
                            </ScrollView>
                        </TouchableOpacity>

                    )

                }}
                keyExtractor={item => item.id}
            />

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        margin: "80px",
    
    },

    images: {
        width: 500,
        height: 200
    },
    text:{
        textAlign:"center",
        fontSize:"30"

    }


});

export default AllPosts
