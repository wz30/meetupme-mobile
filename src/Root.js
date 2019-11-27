import React from 'react';
// import Navigator from './routes/Navigator';
import {HomeScreen,NotificationScreen, ProfileScreen} from './screens'
// import { NavigationNativeContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// const Root = createAppContainer(RootStack)
// export default Root

// const Root = () => <Navigator />
export default  Root = createBottomTabNavigator({
    Home: HomeScreen ,
    Notifications: NotificationScreen ,
    Profile: ProfileScreen
},{
    initialRouteName:'Home',
    activeTintColor: 'orange',
    swipeEnabled: false,
    tabBarOptions:{
        showLabel: false
    }
}
);

// const Root= createAppContainer(Tab)

