import React, {Component} from 'react';
import {View, Switch, Text} from 'react-native';

class App extends Component {
    constructor() {
        super();
        this.state = {
            switchStatus : false
        }
    }
    render() {
        return (
            <View>
                <Switch
                    value={this.state.switchStatus}
                    onValueChange={(switchValue) => {
                    this.setState({switchStatus:switchValue })
                }}/>

                <Text>Hi : {this.state.switchStatus ? 'On':'OFF'}</Text>
            </View>
        );
    }
}

export default App;