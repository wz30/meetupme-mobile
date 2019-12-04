import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
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
      height : 300,
      backgroundColor: '#384259',
      //alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flex: 0.2,
      backgroundColor: 'red',
      justifyContent: 'flex-end'
    },
    // createButton: {

    // },
    topContainer: {
        flex: 1,
        alignItems: 'center', //move to middle
        justifyContent: 'center',//move 
        //backgroundColor: 'red',
    },
    bottomContainer:{
        flex:0.8,
        backgroundColor: 'blue',
    }
  });

export default styles;