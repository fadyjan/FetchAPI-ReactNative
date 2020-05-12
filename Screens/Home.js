import React from 'react'
import { View, Text } from 'react-native'
const Home = ({ navigation }) => {

    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text onPress={() => navigation.navigate('AllPosts')}>Profile Page Test Click on me .... </Text>
        </View>
    );
}

export default Home