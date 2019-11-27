import React, {Component} from 'react'

import {StyleSheet,View,Text} from 'react-native';
import {MeetupApi} from '../../../constants/api'
import styles from './styles/HomeScreen';
import {LoadingScreen} from '../../commons'
import {MyMeetupsList} from './component'
import {FontAwesome} from '@expo/vector-icons';
import { Button, Icon } from 'native-base';
import {CreateMeetupScreen} from '../createMeetup';

const meetupApi = new MeetupApi();

export default class HomeScreen extends React.Component{
    static defaultProps = {
        meetupApi
    }
    state = {
        loading : false,
        meetups : []
    }

    static navigationOptions = {
        header: {
            visible: true,
          },
        header: () => {
            const title = "title"
            const style = {backgroundColor: 'red'};
            const right = (
                <View>
                    <Button transparent onPress = { this.FunctionToOpenSecondActivity }>
                        <Icon
                            name = 'md-add-circle'
                            style = { {
                                fontSize: 25,
                                colcor: 'red',
                                
                                }
                            } 
                        />
                    </Button>
                </View>
            );
            return {style, right ,title};
        },
        tabBarIcon: () => (
            <FontAwesome name="home" size={25}/>
          )
    }
    FunctionToOpenSecondActivity = () =>
    {
        this.props.navigation.navigate('CreateMeetupScreen');
        console.log("navigate to create meetup")
    }

    async componentDidMount(){
        this.setState({loading:true});
        const meetups = await this.props.meetupApi.fetchGroupMeetups();
        // console.log("meetups")
        // console.log((meetups))
        //setTimeout(()=>this.setState({loading:false, meetups}), 20000)
        this.setState({loading:false, meetups:meetups});
    }
    render(){
        if(this.state.loading){
            return (<LoadingScreen />)
        }
        return (    
            
            <View style = {styles.root}>
                {/* <View style = {styles.header}>
                    <Button transparent onPress = { this.FunctionToOpenSecondActivity }>
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
                </View> */}

                <View style={styles.topContainer}>
                    <Text> HomeScreen</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <MyMeetupsList meetups = {this.state.meetups}/>
                </View>
            </View>
        );
    }
}
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });