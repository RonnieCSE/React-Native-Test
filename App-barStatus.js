import React, {Component} from 'react';
import {View, Text, TextInput, Button,StatusBar} from 'react-native';
 // TEXT INPUT  Summation
class App extends Component {
    constructor() {
        super();
        this.state = {
            num1:0,
            num2:0,
            result: '',
        }
    }

    addTwo = () =>{
       var x =  this.state.num1 + this.state.num2
        this.setState({result: x.toString()})
    }
    render() {
        return (
            <View style={{padding:20}}>
                <StatusBar hidden={false} backgroundColor="orange" translucent={false} barStyle="light-content"></StatusBar>

            </View>
        );
    }
}

export default App;