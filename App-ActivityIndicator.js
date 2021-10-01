import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';

class App extends Component {
    render() {
        return (
            <View>
                <ActivityIndicator size="large" color="red" />
            </View>
        );
    }
}

export default App;