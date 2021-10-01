import React, {Component} from 'react';
import {View, Text, FlatList, Image, Alert, TouchableHighlight} from 'react-native'
class App extends Component {

    myData = [
        {id:"1",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'Afghanistan', code: 'AF'},
        {id:"2",image:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",name: 'Åland Islands', code: 'AX'},
        {id:"3",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'Albania', code: 'AL'},
        {id:"4",image:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",name: 'Algeria', code: 'DZ'},
        {id:"5",image:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",name: 'American Samoa', code: 'AS'},
        {id:"6",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'AndorrA', code: 'AD'},
        {id:"7",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'Angola', code: 'AO'},
        {id:"8",image:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",name: 'Anguilla', code: 'AI'},
        {id:"9",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'Antarctica', code: 'AQ'},
        {id:"10",image:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",name: 'Antigua and Barbuda', code: 'AG'},
        {id:"11",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'Argentina', code: 'AR'},
        {id:"12",image:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",name: 'Armenia', code: 'AM'},
        {id:"13",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'Aruba', code: 'AW'},
        {id:"14",image:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",name: 'Australia', code: 'AU'},
        {id:"15",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'Austria', code: 'AT'},
        {id:"16",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'Azerbaijan', code: 'AZ'},
        {id:"17",image:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",name: 'Bahamas', code: 'BS'},
        {id:"18",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'Bahrain', code: 'BH'},
        {id:"19",image:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",name: 'Bangladesh', code: 'BD'},
        {id:"20",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'Barbados', code: 'BB'},
        {id:"21",image:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",name: 'Belarus', code: 'BY'},
        {id:"22",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'Belgium', code: 'BE'},
        {id:"23",image:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",name: 'Belize', code: 'BZ'},
        {id:"24",image:"https://cdn.pixabay.com/photo/2021/03/06/12/27/apples-6073599_960_720.jpg",name: 'Benin', code: 'BJ'},
        {id:"25",image:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",name: 'Bermuda', code: 'BM'}

    ]

    clickItem= (param)=>{
        Alert.alert(param)
    }

    singleCountry = ({obj})=>{
        return (
            <TouchableHighlight>
            <View style={{backgroundColor:'#e6e6e6',margin:5, flexDirection:"column", width:'70%', height:300}}>

                <View>
                    <Image style={{width:'100%', height:200}} source={{uri:obj.image}}/>
                </View>
                <View>
                    <Text onPress={this.clickItem.bind(this, obj.name)} style={{color:"#000", fontSize: 20}}>{obj.name}</Text>
                    <Text style={{color:"red", fontSize: 14}}>{obj.code}</Text>
                </View>

            </View>
            </TouchableHighlight>
        )
    }


    render() {
        return (
            <FlatList  numColumns={1} horizontal={false} data={this.myData} keyExtractor={item => item.id} renderItem={({item})=> <this.singleCountry obj={item}  />  }></FlatList>
        );
    }
}

export default App;