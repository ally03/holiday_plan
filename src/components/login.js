// Import libraries for making a compoents
import React from 'react';
import { Button } from 'react-bootstrap';
import { 
    Text,
    ScrollView,
    TextInput,
    View,
    //Button,
} from 'react-native';


// Make a components
const Login = (props) => {
    const { textStyle, viewStyle, scrollStyle } = styles;

    return (
        <ScrollView style={scrollStyle}>
            <Text style={textStyle}>
                { props.loginText }
            </Text>
            <TextInput placeholder='Username' />
            <TextInput placeholder='Password' />
            <View style={viewStyle} />
            <Button bsStyle='success'>
                {/* onPress={this.props.onLoginPress} */}
                Submit
            </Button>
        </ScrollView> 
    );
};

const styles = {
    scrollStyle: {
        padding: 20,
    },
    textStyle: {
        fontSize: 27,
    },
    viewStyle: {
        margin: 7,
    }
};

// make the components availabel to other parts of the app (export)
export default Login;
