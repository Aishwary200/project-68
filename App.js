import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from "react-navigation-tabs"; 
import Facebook from './screens/fb'
import Insta from './screens/in'

export default class App extends Component {
  render(){
  return (
    <AppContainer/>
  );
  }
}

const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Insta}
})
const AppContainer=createAppContainer(TabNavigator)