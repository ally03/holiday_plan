// Index.ios.js - place code in here for IOS!! 


// Import a library to help create a componrnt
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import Login from './src/components/login';
//import Logout from './src/components/logout';

//create a component
const App = () => (
    <View>
        <Header headerText={'Holiday Plan!'} />
        <Login loginText={'Login'} />
        {/* <Logout buttonText={'logout'} /> */}
    </View>
);

// Render it to the device
AppRegistry.registerComponent('holiday_plan', () => App);
