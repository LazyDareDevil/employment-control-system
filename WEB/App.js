import AuthWindow from './SignIn/AuthWindow';
import MainApp from './MainApp/MainApp';
import React, {Component} from 'react';

import * as Font from 'expo-font'

export default class App extends Component {
    state = {
        renderView: 0,
        login: '',
        fontLoaded: true,
        token: null
    };

    async componentDidMount() {
        await Font.loadAsync({
          'roboto-light': require('./assets/media/Roboto-Light.ttf'),
          'Roboto_medium': require('./assets/media/Roboto-Medium.ttf')
        });

        // this.setState({ fontLoaded: true })
    }

    checkData = async (flag, someLogin, somePassword) => {
        if (flag) {
            var targetUrl = 'http://127.0.0.1:8000/api/login/'
            fetch(targetUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": someLogin,
                    "password": somePassword,
                }),
            })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((responseJson) => {
                let token = responseJson.token
                // console.log(response.token)

                if (token != null) {
                    this.setState({ 
                        renderView: 1,
                        login: someLogin,
                        token: token
                    })
                }
            })
            .catch((error) => {
                alert('error: ' + error)
            });

            // this.setState({ 
            //     renderView: 1,
            //     login: someLogin
            // })
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

