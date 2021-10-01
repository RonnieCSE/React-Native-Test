import React, {Component} from 'react';
import {View, Text, Modal, Button, StyleSheet} from 'react-native'
class App extends Component {
    constructor() {
        super();
        this.state = {
            modalVisibility : false
        }
    }

    openModal = () => {
        this.setState({modalVisibility: true})
    }
    closeModal = () => {
        this.setState({modalVisibility: false})
    }

    style = StyleSheet.create({

            modalView:{
                height:150,
                width:250,
                backgroundColor:'white',
                margin:10,
                padding:20,
                elevation:5,
                shadowColor:"#000",
                shadowOffset:{height:0, width:2},
                alignItems:'center'
            }
        })
    render() {
        return (
            <View>

                <Button onPress={this.openModal} title="Open Modal"/>

                <Modal animationType="slide" visible={this.state.modalVisibility}>
                    <View style={this.style.modalView}>
                        <Text>Modal is Ready</Text>
                        <Button onPress={this.closeModal} title="Close"/>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default App;