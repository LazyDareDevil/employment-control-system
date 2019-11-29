import AuthWindow from './SignIn/AuthWindow';
import MainApp from './MainApp/MainApp';
import React, {Component} from 'react';

import * as Font from 'expo-font'

export default class App extends Component {
    state = {
        renderView: 0,
        login: '',
        fontLoaded: false,
        token: null
    };

    async componentDidMount() {
        await Font.loadAsync({
          'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
          'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf')
        });

        this.setState({ fontLoaded: true })
    }

    checkData = (flag, someLogin, somePassword) => {
        if (flag) {
            // fetch('https://8a8cbf63.ngrok.io/api/login', {
            //     mode: 'no-cors',
            //     credentials: 'include',
            //     method: 'POST',
            //     headers: {
            //         // Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         username: someLogin,
            //         password: somePassword,
            //     }),
            // })
            // .then((response) => {
            //     console.log('response')
            //     return response
            // })
            // .then((responseJson) => {
            //     console.log('response 2')
            //     // let data = JSON.parse(responseJson).token
            //     alert(responseJson.status + " " + responseJson.bodyUsed)
            //     // if (data != null) {
            //     //     this.setState({ 
            //     //         renderView: 1,
            //     //         login: someLogin,
            //     //         token: data
            //     //     })
            //     // }
            // })
            // .catch((error) => {
            //     alert('error: ' + error)
            // });

            this.setState({ 
                renderView: 1,
                login: someLogin
            })
        }
    }

    checkExit = flag => {
        if (flag) {
            this.setState({
                correctData: false,
                login: '',
                renderView: 0
            })
        }
    }

    render() {

        if (this.state.fontLoaded) {
            if (this.state.renderView === 1) {
            return <MainApp login={this.state.login} checkExit={this.checkExit}/>
            } else return <AuthWindow checkData={this.checkData}/>
        } else return null
        
    }
}

