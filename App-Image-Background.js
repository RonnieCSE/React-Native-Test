import React from 'react';
import {ImageBackground, View, Text} from 'react-native';

const App = () => {
    return (
        <View style={{flex:1,flexDirection:'column'}}>

            <ImageBackground style={{flex:1, resizeMode:"cover"}} source={{uri:"https://cdn.pixabay.com/photo/2021/06/30/06/37/mountains-6376016_960_720.jpg"}}>

            <Text style={{color:'#ff0',fontSize:30}}>Hellow Ronnie</Text>
            </ImageBackground>


        </View>
    );
};

export default App;