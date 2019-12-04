import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

import {  Icon } from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {Input, Button} from 'react-native-elements';
import DateTimePicker from "react-native-modal-datetime-picker"; //date time
import moment from 'moment';
import {MeetupApi} from '../../../constants/api'

const meetupApi = new MeetupApi();
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
                            }
                        } 
                    />
        </Button>
      );
    }
  }

export default class CreateMeetupScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isDateTimePickerVisible: false,
          date: moment(),
          title: '',
          description: '',
        };
      }
    showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
    };
    
    hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
    };
    
    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.setState({date});
        this.hideDateTimePicker();
    };

    //chekc if time valid
    checkTitle() {
        const {date} = this.state;
        if(date > moment()){
            return moment(date).format('MMMM Do YYYY, h:mm:ss a'); 
        }
        return 'Pick a valid meetup Date'
    }

    checkIfButtonSubmitDisabled()  {
        const {title, description, date} = this.state
        if(title.length >5 && description.length>5 && date>moment()){
            return false;
        }else{
            return true;
        }
    }
    changeTitle = title => this.setState({title})
    changeDescr = description => this.setState({description})

    _createMeetup = async() => {
        const {title, description, date} = this.state;
        const res = await meetupApi.createGroupMeetups({
            title,
            description,
            date
        });
        //console.log(res)
    }

    static navigationOptions = {
        // tabBarIcon: () => (
        //     <Ionicons name="ios-notifications" size={25}/>
        //   )
        //title: "Create a Meetup!",
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
                <View style = {styles.header}>
                    <View style = {styles.text}>
                        
                    </View>
                    
                </View>
                <View style = {styles.content}>
                    <View>
                        <Input 
                            label="Title" 
                            onChangeText = {this.changeTitle}
                        />
                    </View> 
                    <View>
                        <Input 
                            label="Description" 
                            onChangeText = {this.changeDescr}
                        />
                    </View>
                    <View>
                        <Button 
                            onPress={this.showDateTimePicker}
                            title = {this.checkTitle()}
                        />
                    </View>
                    
                    <View>
                        <Button 
                            title="Create a meetup"
                            disabled = {this.checkIfButtonSubmitDisabled()}
                            onPress = {this._createMeetup}
                        />
                    </View>

                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                        mode = 'datetime'
                    />
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
    header : {
        flex: 0.1,
        backgroundColor: 'red'
    },
    content:{
        flex: 1,
    },
    text : {
        //alignItems: 'center',
        justifyContent: 'flex-end'
    }

  });