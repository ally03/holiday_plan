import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './common/header';
import { Login } from './common/login';
import { Logout } from './common/logout';

class App extends Component {
    render() {
        return (
            <View>
                <Header headerText={'Holiday Plan!'} />
                <Login loginText={'Login'} />
                <Logout />
            </View>
        );
    }
}

export default App;
