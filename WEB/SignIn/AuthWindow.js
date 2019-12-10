import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Text, Button } from 'native-base'
import styles from './styles'
import Form from './Form'

export default class AuthWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            server: "",
            correctData: false
        };
    }

    handleButtonClick = () => {
        // с проверкой
        if (this.state.login && this.state.password) {
            this.setState({ correctData: true })
            return true
        } else {
            alert('wrong login or password')
            return false
        }

        // без проверки на пустоту 
        // this.setState({ correctData: true })
        // return true
    }

    setLogin = val => {
        this.setState({ login: val })
    }

    setPassword = val => {
        this.setState({ password: val })
    }

    setServer = val => {
        this.setState({ server: val })
    }

    render() {
        var checkData = this.props.checkData
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.signWindow}>
                    <Text style={styles.appName}>App name</Text>
                    <Text style={styles.authText}>Authorization</Text>
                    <Form 
                        loginInput={this.setLogin}
                        passwordInput={this.setPassword}
                        serverInput={this.setServer}
                    />
                    <Button style={styles.signInBtn}
                            onPress={() =>  checkData(this.handleButtonClick(), this.state.login, this.state.password,
                                this.state.server) }
                    >
                        <Text style={{color: 'white', fontFamily: 'roboto-light'}}>Sign in</Text>
                    </Button>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

