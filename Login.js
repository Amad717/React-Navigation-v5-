import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AuthContext from './AuthContext';

class Login extends React.Component{

    state = {
        username: '',
        password: ''
    }
    
    render(){
        return(
                <View style={{flex: 1}}>
                    <TextInput 
                        value={this.state.username}
                        onChangeText={(text)=> this.setState({username: text})}
                        style={{height: 50, borderColor: 'grey', borderWidth: 1, margin: 16, padding: 5}}
                        placeholder={"Email"}
                        placeholderTextColor={"grey"}
                    />
                    <TextInput 
                        value={this.state.password}
                        onChangeText={(text)=> this.setState({password: text})}
                        secureTextEntry
                        style={{height: 50, borderColor: 'grey', borderWidth: 1, margin: 16, padding: 5}}
                        placeholder={"Password"}
                        placeholderTextColor={"grey"}
                    />
                    <Button onPress={() => this.context.login(this.state.username, this.state.password)} title="Click"/>
                </View>
        );
    }
}

Login.contextType = AuthContext;
export default Login;