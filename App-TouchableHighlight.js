import React, {Component} from 'react';

import {ImageBackground, View, Text, TouchableHighlight, Alert} from 'react-native';

class App extends Component {

    alertMe = () =>{
        Alert.alert('Hi')
    }
    render() {
        return (
            <View style={{flex:1, flexDirection:'row', alignItems:"center", justifyContent:"center"}}>
                <TouchableHighlight onPress={this.alertMe} activeOpacity={0.1} underlayColor="red">
                <Text style={{fontSize:20}}>Hello Ronnie</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default App;