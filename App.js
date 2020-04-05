import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import AuthContext from './AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import DetailsScreen from './Details';
import Login from './Login';

const Stack = createStackNavigator();

class App extends React.Component {

    login = (uname, pwrod) => {
        this.setState({name: uname, isSignedIn: true})
    }
    
    state = {
        name: "",
        isSignedIn: false,
        login: this.login
    };
    
    render(){
        const {isSignedIn} = this.state;
        return (
            <NavigationContainer>
                <AuthContext.Provider value={this.state}>
                    <Stack.Navigator>
                        {
                            isSignedIn?(
                                <>
                                <Stack.Screen name="Home" options={{headerTitle: "Welcome"}}>
                                    {props => <HomeScreen {...props} extraData={this.state.name} />}
                                </Stack.Screen>
                                <Stack.Screen name="Details" options={{headerTitle: "Details"}}>
                                    {props => <DetailsScreen {...props} extraData={this.state.name}/> }
                                </Stack.Screen>
                                </>
                            ):(
                                <>
                                <Stack.Screen name="Login" options={{headerTitle: "Login"}}>
                                    {props => <Login {...props} extraData={this.state.name}/> }
                                </Stack.Screen>
                                </>
                            )
                        }
                    </Stack.Navigator>
                </AuthContext.Provider>
            </NavigationContainer>
        );
    }
}

export default App;