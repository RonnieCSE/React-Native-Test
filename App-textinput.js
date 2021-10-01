import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
 // TEXT INPUT
class App extends Component {
    render() {
        return (
            <View>
                <TextInput  multiline={true} textAlign="left" style={{borderColor:"#000",borderWidth:1,height:50, margin:40, padding:10}} placeholder={'Your email address'}/>
            </View>
        );
    }
}

export default App;