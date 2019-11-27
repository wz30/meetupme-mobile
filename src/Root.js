import React from 'react';
// import Navigator from './routes/Navigator';
import {HomeScreen,NotificationScreen, ProfileScreen, CreateMeetupScreen} from './screens'
// import { NavigationNativeContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
// const Root = createAppContainer(RootStack)
// export default Root

// const Root = () => <Navigator />



const Root1 = createBottomTabNavigator({
    Home: HomeScreen,
    Notifications: NotificationScreen ,
    Profile: ProfileScreen
},{
    initialRouteName:'Home',
    activeTintColor: 'orange',
    swipeEnabled: false,
    tabBarOptions:{
        showLabel: false,
        style: {
            backgroundColor: 'white'
        }
    }
}
);

export default Root = createStackNavigator(
    {
        Home: Root1,
        CreateMeetup: CreateMeetupScreen
    }
)

// const Root= createAppContainer(Tab)

