import React from 'react';
// import Navigator from './routes/Navigator';
import {HomeScreen,NotificationScreen, ProfileScreen, CreateMeetupScreen} from './screens'
// import { NavigationNativeContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, Icon } from 'native-base';
// const Root = createAppContainer(RootStack)
// export default Root

// const Root = () => <Navigator />
class CreateButton extends React.Component {

    render() {
      return (
        <Button transparent >
                    <Icon
                        name = 'md-add-circle'
                        style = { {
                            fontSize: 30,
                            color: 'white',
                            flex: 0.1
                            }
                        } 
                    />
        </Button>
      );
    }
  }


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
    },
    {
        headerMode: 'none',
        // headerStyle: {
        //     backgroundColor: 'red',
        // },
        // defaultNavigationOptions: {
        //   //headerVisible: true,
        //   headerStyle: {
        //     backgroundColor: 'red',
        //   },
        //   //title: 'Home',
        //   title: <CreateButton />,
        // }
    }
)

// const Root= createAppContainer(Tab)

