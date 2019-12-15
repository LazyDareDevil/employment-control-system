import AuthWindow from './SignIn/AuthWindow';
import MainApp from './MainApp/MainApp';
import React, {Component} from 'react';

import * as Font from 'expo-font'

export default class App extends Component {
    state = {
        renderView: 0,
        login: '',
        fontLoaded: false,
        token: null,
        ngrokServer: ""
    };

    async componentDidMount() {
        await Font.loadAsync({
          'roboto-light': require('./assets/media/Roboto-Light.ttf'),
          'Roboto_medium': require('./assets/media/Roboto-Medium.ttf')
        });

        this.setState({ fontLoaded: true })
    }

    checkData = async (flag, someLogin, somePassword, someServer) => {
        if (flag) {
            var url = 'http://' + someServer + '.ngrok.io/api/'
            fetch(url + 'login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": someLogin,
                    "password": somePassword,
                }),
            })
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                let token = responseJson.token
                if (token != null) {
                    this.setState({ 
                        renderView: 1,
                        login: someLogin,
                        token: token,
                        ngrokServer: url
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

            fetch(this.state.ngrokServer + 'logout/', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"token": this.state.token}),
            })
            .then((response) => {
                if (response.status == 200) {
                    this.setState({
                        correctData: false,
                        login: '',
                        renderView: 0
                    })
                }
            })
            .catch((error) => {
                alert('error: ' + error)
            });

            // this.setState({
            //     correctData: false,
            //     login: '',
            //     renderView: 0
            // })
        }
    }

    render() {

        if (this.state.fontLoaded) {
            if (this.state.renderView === 1) {
            return <MainApp login={this.state.login} checkExit={this.checkExit}
                            ngrokServer={this.state.ngrokServer} token={this.state.token}/>
            } else return <AuthWindow checkData={this.checkData}/>
        } else return null
        
    }
}

