import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

import {  Icon } from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {Input, Button} from 'react-native-elements';

class CloseButton extends React.Component {

    render() {
      //const { goBack } = this.props.navigation;
      return (
          //onPress = { () => goBack(null) }
        <Button transparent >
                    <Icon
                        name = 'md-close'
                        style = { {
                            fontSize: 30,
                            color: 'white',
                            }
                        } 
                    />
        </Button>
      );
    }
  }

export default class CreateMeetupScreen extends React.Component{
    static navigationOptions = {
        // tabBarIcon: () => (
        //     <Ionicons name="ios-notifications" size={25}/>
        //   )
        title: "Create a Meetup!",
        // header: () => {
        //     const style = {backgroundColor: 'red'};
        //     return {style};
        // }
        headerStyle: {
            backgroundColor: 'red',
        },
        //headerTitle: () => <CloseButton />,
    }

    render() {
        return (
            <View style={styles.container}> 
                
                <View>
                    <View>
                        <Input label="Title"></Input>
                    </View> 
                    <View>
                        <Input label="Description"></Input>
                    </View>
                    <View>
                        <Button title="Pick a meetup date"/>
                    </View>
                    
                    <View>
                        <Button title="Create a meetup"/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });