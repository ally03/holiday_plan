import React, { Component } from 'react';
//import { Button } from 'react-bootstrap';
import Button from 'react-native-bootstrap-buttons';

class Logout extends Component {
    render() {
        return (
            <Button bsStyle='success'>Logout</Button>
        );
    }
}

export { Logout };
