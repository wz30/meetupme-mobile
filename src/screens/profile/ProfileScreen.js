import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {
    MaterialCommunityIcons} from '@expo/vector-icons';

export default class ProfileScreen extends React.Component{
    static navigationOptions = {
        tabBarIcon: () => (
            <MaterialCommunityIcons name="face-profile" size={25}/>
          )
    }

    render() {
        return (
            <View style={styles.container}> 
                <Text>Profile</Text>
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