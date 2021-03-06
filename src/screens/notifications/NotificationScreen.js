import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
export default class NotificationScreen extends React.Component{
    static navigationOptions = {
        tabBarIcon: () => (
            <Ionicons name="ios-notifications" size={25}/>
          )
    }

    render() {
        return (
            <View style={styles.container}> 
                
                <Text>Notification</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });