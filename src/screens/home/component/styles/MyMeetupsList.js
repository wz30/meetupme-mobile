import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

//do not figure out how: can not deploy or render the color
// const styles = EStyleSheet.create({
//     root: {
//         flex: 1,
//         backgroundColor: '#384259',
//         alignItems: 'center',
//         justifyContent: 'center',
//         //backgroundColor: '#fff'//'$blackBlueColor'

//     },
// });

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#384259',
      //alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer: {
      // flex: 0.1,
      paddingHorizontal: '2.5%',
      paddingVertical: '2.5%',
    },
    title: {
      color: 'white',
      fontSize: 25,
    },  
    meetupCard: {
      height:200,
      width: 175,
      marginHorizontal: 2,
      // marginLeft: '1.5%',
      //borderLeftWidth: 5,
      backgroundColor: '#f73859'
    },
    meetupCardTopContainer: {
      flex: 1,
      position: 'relative'
    },
    meetupCardTitle: {
      position: 'absolute',
      color: 'white',
      top : '2%',
      left: '2.5%',
    },
    meetupCardBottomContainer: {
      flex: 0.4,
      backgroundColor:'white',
      justifyContent: 'center',
      paddingHorizontal: '2.5%'
    },
    meetupCardMetaName: {
      fontSize: 15
    },
    meetupCardMetaDate: {
      fontSize: 13
    }
  });

export default styles;