import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../Screens/Home"
import AllPosts from "../Screens/AllPosts"
import Post from '../Screens/Post'
import { StyleSheet } from 'react-native'


const { Navigator: StackNavigator, Screen: StrackScreen } = createStackNavigator();
const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();

const HomeStack = ( { navigation}) => {
    return(

        <StackNavigator screenOptions={{
            headerStyle: {
            backgroundColor: "orange",
            justifyContent: "center"
        }
    }}>
        <StrackScreen name="Home" component={AllPosts} />
        <StrackScreen name="Post" component={Post} screenOptions={{

        }} />
    </StackNavigator >
    );

}

const Root = ({ navigation }) => {
    return (

        <NavigationContainer>

            <TabNavigator  
                tabBarOptions={
                    {
                        activeTintColor: "orange",
                        inactiveTintColor: "green",
                        labelStyle: {
                            fontSize: 30,
                            padding:10
                        }
                    }
                }>
                <TabScreen name="Post" component={HomeStack} ></TabScreen>
                <TabScreen name="Profile" component={Home}></TabScreen>
            </TabNavigator>

        </NavigationContainer>

    );

}

const styles = StyleSheet.create({
    container: {
        fontSize:50
    }
});

export default Root