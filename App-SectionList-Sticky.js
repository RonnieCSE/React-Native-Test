import React, {Component} from 'react';
import {View, Text, SectionList, SafeAreaView, Alert} from 'react-native';

class App extends Component {

    itemChild = ({itemData}) =>{
        return (
            <View>
                <Text onPress={this.childClick.bind(this, itemData)} style={{width:'100%', height:20}}>{itemData}</Text>
            </View>
        )
    }

    itemHeadChild = ({header}) =>{
        return (
            <View style={{width:'100%', height:40, padding:10,   backgroundColor:"teal"}}>
                <Text onPress={this.childHeadClick.bind(this, header) } style={{ color:"white"}}>{header}</Text>
            </View>
        )
    }

    childClick = (title) =>{
        Alert.alert(title)
    }

    childHeadClick = (title) =>{
        Alert.alert(title)
    }


    DATA = [
        {title : "Bangladesh",data:["Dhaka","Barisal","Feni","Khulna"]},
        {title : "India",data:["Mumbai","Kolkata","Delhi","Punjab"]},
        {title : "Pakistan",data:["Coeta","Lahore","Punjab","Korachi"]},
        {title : "Bangladesh",data:["Dhaka","Barisal","Feni","Khulna"]},
        {title : "India",data:["Mumbai","Kolkata","Delhi","Punjab"]},
        {title : "Pakistan",data:["Coeta","Lahore","Punjab","Korachi"]},
        {title : "Bangladesh",data:["Dhaka","Barisal","Feni","Khulna"]},
        {title : "India",data:["Mumbai","Kolkata","Delhi","Punjab"]},
        {title : "Pakistan",data:["Coeta","Lahore","Punjab","Korachi"]},
        {title : "Bangladesh",data:["Dhaka","Barisal","Feni","Khulna"]},
        {title : "India",data:["Mumbai","Kolkata","Delhi","Punjab"]},
        {title : "Pakistan",data:["Coeta","Lahore","Punjab","Korachi"]},
        {title : "Bangladesh",data:["Dhaka","Barisal","Feni","Khulna"]},
        {title : "India",data:["Mumbai","Kolkata","Delhi","Punjab"]},
        {title : "Pakistan",data:["Coeta","Lahore","Punjab","Korachi"]},
        {title : "Bangladesh",data:["Dhaka","Barisal","Feni","Khulna"]},
        {title : "India",data:["Mumbai","Kolkata","Delhi","Punjab"]},
        {title : "Pakistan",data:["Coeta","Lahore","Punjab","Korachi"]},

    ]

    render() {
        return (
            <SafeAreaView>
                <SectionList
                    stickySectionHeadersEnabled={true}
                    sections={this.DATA}
                    renderItem={({ item }) => <this.itemChild  itemData={item}/> }

                    renderSectionHeader={({section:{title}}) => <this.itemHeadChild  header={title}  />}
                    keyExtractor={(item, index)=> item+index }
                />

            </SafeAreaView>
        );
    }
}

export default App;