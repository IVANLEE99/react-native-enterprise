import React from 'react';
import {StackNavigator} from 'react-navigation';
import LoginPage from './login/loginPage';
import RegPage from './login/regPage';
import {MainNavigator} from './main/main';
import storage from './common/storage';


const App = StackNavigator({
    Login: {screen: LoginPage},
    Reg: {screen: RegPage},
    Main: {
        screen: MainNavigator,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
}, {
    initialRouteName: 'Login',
    headerMode: 'screen'
});
export default App;