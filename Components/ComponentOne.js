import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native'
class ComponentOne extends Component {

    alertMe= ()=>{
        Alert.alert('Ha ha ha ha')
    }

    render() {
        return (
            <View >
                <Text>Name {this.props.name}</Text>
                <Text>Age {this.props.city}</Text>
                <Text> City {this.props.city}</Text>

                <Button color="green" title="Click Here" onPress={this.alertMe}></Button>
            </View>
        );
    }
}

export default ComponentOne;