import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
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
                <TextInput onChangeText={(text)=> {this.setState({num1:parseInt(text)})}}  style={{borderColor:"#000",borderWidth:1,height:50,  padding:10, marginBottom:10}} placeholder={'Number One'}/>
                <TextInput onChangeText={(text)=>{this.setState({num2:parseInt(text)})}}  style={{borderColor:"#000",borderWidth:1,height:50,  padding:10, marginBottom:10}} placeholder={'Number Two'}/>

                <Button onPress={this.addTwo} title={'Add'}/>

                <Text style={{margin:10, fontSize: 24}}>Result : {this.state.result}</Text>
            </View>
        );
    }
}

export default App;