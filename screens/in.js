import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Insta extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',fontSize:30,fontStyle:'bold'}}>
            <a href='https://www.instagram.com/'>Instagram</a>
            </View>
        )
    }
}