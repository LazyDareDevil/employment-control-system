import React, {Component} from 'react'
import {View, StyleSheet, Alert } from 'react-native'
import { Button, Text, Container } from 'native-base'

export default class Workspace extends Component {
    constructor(props){
        super(props)
    }

    confirmExit = () => {
        Alert.alert(
            'Are you sure?',
            '',
            [
                {text: 'Yes', onPress: () => this.props.checkExit(true)},
                {
                    text: 'No', 
                    onPress: () => this.props.checkExit(false), 
                    style: 'cancel'
                },
            ],
            {cancelable: false},
        );
    }

    render() {
        return(
            <Container style={{flex: 12, backgroundColor: 'rgba(211, 211, 211, 0.4)'}}>
                <View style={{flex: 1}}></View>
                <View style={styles.mainView}>

                        <Button style={styles.button}>
                            <Text style={styles.text}>View history</Text>
                        </Button>
                        <Button style={styles.button}>
                            <Text style={styles.text}>Set default parameters</Text>
                        </Button>
                        <Button style={styles.button}>
                            <Text style={styles.text}>Sth else</Text>
                        </Button>

                        <Button style={styles.exitButton}
                                onPress={() => this.confirmExit()}>
                            <Text style={styles.text}>Exit</Text>
                        </Button>
                  
                </View>
                <View style={{flex: 1}}></View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 10,
        alignItems: 'center'
    },

    text: {
        color: 'white',
        fontFamily: 'roboto-light',
        marginBottom: 0
    },

    button: {
        backgroundColor: 'rgba(39, 171, 227, 1)', 
        height: '15%',
        marginBottom: '5%',
        width: '70%',
        justifyContent: 'center',
        borderRadius: 8
        // alignContent: 'center',
        // textAlignVertical: 'center'
    },

    exitButton: {
        backgroundColor: 'rgba(229, 38, 37, 1)', 
        height: '15%',
        width: '70%',
        justifyContent: 'center',
        borderRadius: 100
    }
})