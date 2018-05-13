import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './common/header';
import Login from './pages/Login';
// import { Logout } from './common/logout';
// import Container from '../components/Container';
// import Button from '../components/Button';
// import Label from '../components/Label';

class App extends Component {
    render() {
        return (
            <View>
                <Header headerText={'Holiday Plan!'} />
                <Login />
            </View>
        );
    }
}

export default App;
