import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native'
class App extends Component {

    constructor() {
        super();
        this.state = {
            selectedItemValue:'',
            selectedItemPosition:'',
        }

    }

    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.selectedItemValue}
                    onValueChange={(itemValue, itemPosition) => {
                        this.setState({
                            selectedItemValue:itemValue,
                            selectedItemPosition:itemPosition
                        })
                    }}
                >

                    <Picker.item label ="Bangladesh" value="BD"/>
                    <Picker.item label ="India" value="IN"/>
                    <Picker.item label ="Ameraica" value="US"/>
                    <Picker.item label ="United Kingdom" value="UK"/>

                </Picker>

                <Text style={{fontSize:40}}>{this.state.selectedItemValue}  </Text>
            </View>
        );
    }
}

export default App;