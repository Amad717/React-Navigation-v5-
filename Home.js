import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        const route = this.props.route;
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Welcome {this.props.extraData}!</Text>
                <Button 
                    title="Details Screen"
                    onPress={()=> this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}