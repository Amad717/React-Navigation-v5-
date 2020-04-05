import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

class DetailsScreen extends React.Component{
    
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Welcome to details screen {this.props.extraData}</Text>
                <Button 
                    title="Go Back"
                    onPress={()=> this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
export default DetailsScreen;